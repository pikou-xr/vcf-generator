import { RootState } from '.'
import { ContactsAndErrors } from '../types'
import { FormatError, formatPhoneNumber } from '../utils/formatting'
import { NO_GROUPING_KEY } from '../utils/group-by-field'
import { VcfContact, VCF_FIELD_NAMES } from '../utils/vcf'

export const selectRawData = (state: RootState) => state.rawData.data

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

export const selectVcfFieldMapping = (state: RootState) => state.vcfFieldMapping

export const selectVcfContactsAndErrors = (state: RootState) => {
    const rawData = selectRawDataSafe(state)
    const fieldMapping = selectVcfFieldMapping(state)
    const prefix = selectOutputOptionsPrefix(state)
    const groupByField = selectOutputOptionsGroupByField(state)

    let groupNames: Set<string> = new Set()
    if (groupByField !== null) {
        rawData.forEach((rawData) => {
            groupNames.add(rawData[groupByField])
        })
    } else {
        groupNames.add(NO_GROUPING_KEY)
    }

    const groupedResults: {[group: string]: ContactsAndErrors } = {}

    groupNames.forEach(groupName => {
        const vcfContacts: Array<VcfContact> = []
        const errors: Array<Error> = []
        const filteredRawData = 
            groupByField ? 
                rawData.filter(rawData => rawData[groupByField] === groupName) : rawData

        filteredRawData.forEach((rawData) => {
            const vcfContact: Partial<VcfContact> = {}
            let contactError: Error | null = null
            VCF_FIELD_NAMES.forEach((vcfFieldName) => {
                const rawDataFieldName = fieldMapping[vcfFieldName]
                if (rawDataFieldName) {
                    let value = rawData[rawDataFieldName]
                    if (vcfFieldName === 'firstName') {
                        value = `${prefix}${value}`
                    }
                    if (vcfFieldName === 'workPhone') {
                        try {
                            value = formatPhoneNumber(value)
                        } catch (err) {
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
    
        groupedResults[groupName] = { vcfContacts, errors }
    })

    return groupedResults
    
}

export const selectOutputOptionsPrefix = (state: RootState) =>
    state.outputOptions.prefix


export const selectOutputOptionsGroupByField = (state: RootState) =>
    state.outputOptions.groupByField