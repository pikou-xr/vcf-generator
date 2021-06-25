import { RootState } from "."
import { VCF_FIELD_NAMES } from "../constants"
import { VcfContact } from "../types"

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
    const vcfContacts: Array<VcfContact> = []
    const errors: Array<Error> = []
    rawData.forEach(rawData => {
        const vcfContact: Partial<VcfContact> = {}
        VCF_FIELD_NAMES.forEach(vcfFieldName => {
            const rawDataFieldName = fieldMapping[vcfFieldName]
            // TODO : means vcf contact can be incomplete ... PB !!! 
            // rawDataFieldName shouldnt be null
            if (rawDataFieldName) {
                vcfContact[vcfFieldName] = rawData[rawDataFieldName]
            }
        })
        vcfContacts.push(vcfContact as VcfContact)
    })
    return {vcfContacts, errors}
}