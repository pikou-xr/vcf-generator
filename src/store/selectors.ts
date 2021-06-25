import { RootState } from "."
import { FormatError, formatPhoneNumber } from "../utils/formatting"
import { VcfContact, VCF_FIELD_NAMES } from "../utils/vcf"

export const selectRawData = (state: RootState) => 
    state.rawData.data

export const selectRawDataSafe = (state: RootState) => {
    if (!state.rawData.data) {
        throw new Error(`expected data not null`)
    }
    return state.rawData.data
}

export const selectRawDataErrors = (state: RootState) => state.rawData.errors

export const selectRawDataHeaders = (state: RootState) => {
    const rawData = selectRawDataSafe(state)
    if (!rawData.length) {
        return []
    }
    return Object.keys(rawData[0])
}

export const selectVcfFieldMapping = (state: RootState) => 
    state.vcfFieldMapping

export const selectVcfContactsAndErrors = (state: RootState) => {
    const rawData = selectRawDataSafe(state)
    const fieldMapping = selectVcfFieldMapping(state)
    const prefix = selectOutputOptionsPrefix(state)
    const vcfContacts: Array<VcfContact> = []
    const errors: Array<Error> = []
    rawData.forEach(rawData => {
        const vcfContact: Partial<VcfContact> = {}
        let contactError: Error | null = null
        VCF_FIELD_NAMES.forEach(vcfFieldName => {
            const rawDataFieldName = fieldMapping[vcfFieldName]
            if (rawDataFieldName) {
                let value = rawData[rawDataFieldName]
                if (vcfFieldName === 'firstName') {
                    value = `${prefix}${value}`
                }
                if (vcfFieldName === 'workPhone') {
                    try {
                        value = formatPhoneNumber(value)
                    } catch(err) {
                        if (err instanceof FormatError) {
                            contactError = err
                        } else {
                            throw err
                        }
                    }
                }
                vcfContact[vcfFieldName] = value
            }
        })
        if (!contactError) {
            vcfContacts.push(vcfContact as VcfContact)
        } else {
            errors.push(contactError)
        }
    })
    return {vcfContacts, errors}
}

export const selectOutputOptionsPrefix = (state: RootState) => 
    state.outputOptions.prefix