import { DataHeaders, FieldName, PhoneNumber } from '../types'
import vCardsJS from 'vcards-js'

const GUESS_PHONE_FIELD_NAME = ['téléphone', 'telephone', 'phone', 'phone number', 'numéro de téléphone']
const GUESS_NAME_FIELD_NAME = ['pseudo']

export const VCF_FIELD_NAMES: Array<VcfFieldName> = [
    'firstName',
    'workPhone',
    'email',
    'note',
]
export const VCF_FIELD_NAMES_REQUIRED: Array<VcfFieldName> = [
    'firstName',
    'workPhone',
]

// TODO : i18n
export const VCF_FIELD_NAMES_DISPLAY = {
    'workPhone': 'téléphone',
    'firstName': 'nom',
}

export interface VcfContact {
    firstName: string
    workPhone: PhoneNumber
    email: string
    note: string
}

export type VcfFieldName = keyof VcfContact

export interface VcfFieldMapping {
    firstName: FieldName | null
    workPhone: FieldName | null
    email: FieldName | null
    note: FieldName | null
}

export const getEmptyVcfFieldMapping = () => ({
    firstName: null,
    workPhone: null,
    email: null,
    note: null,
})

export const getDefaultVcfFieldMapping = (
    headers: DataHeaders
): VcfFieldMapping => {
    const phoneFieldName = GUESS_PHONE_FIELD_NAME.filter(word => headers.includes(word))[0]
    const nameFieldName = GUESS_NAME_FIELD_NAME.filter(word => headers.includes(word))[0]
    return {
        firstName: nameFieldName || (headers[0] || null),
        workPhone: phoneFieldName || (headers[1] || null),
        email: null,
        note: null,
    }
}

export const contactsToVcard = (contacts: Array<VcfContact>) => {
    const vCardStrings = []
    for (const contact of contacts) {
        const vCard = vCardsJS()
        Object.entries(contact).forEach(([name, value]) => vCard[name as VcfFieldName] = value)
        vCardStrings.push(vCard.getFormattedString())
    }
    return vCardStrings.join('\n')
}