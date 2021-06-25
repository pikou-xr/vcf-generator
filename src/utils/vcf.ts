import { DataHeaders, VcfFieldMapping } from '../types'

export const getEmptyVcfFieldMapping = () => ({
    firstName: null,
    workPhone: null,
    email: null,
    note: null,
})

export const getDefaultVcfFieldMapping = (
    headers: DataHeaders
): VcfFieldMapping => ({
    firstName: headers[0] || null,
    workPhone: headers[1] || null,
    email: headers[2] || null,
    note: headers[3] || null,
})
