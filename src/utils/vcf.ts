import { DataHeaders, FieldName, PhoneNumber } from '../types'
import vCardsJS from 'vcards-js'

const GUESS_PHONE_FIELD_NAME = [
    'téléphone',
    'telephone',
    'phone',
    'phone number',
    'numéro de téléphone',
]
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
    workPhone: 'téléphone',
    firstName: 'nom',
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

// Helper function, guesses the right field name from `headers` by picking from options in `guessList`.
const guessFieldName = (headers: DataHeaders, guessList: Array<string>, defaultFieldName: string | null) => {
    const headersNormalized = headers.map(possibleName => possibleName.toLowerCase())
    let guessedFieldName: string | null = null
    for (let possibleName of guessList) {
        const headerIndex = headersNormalized.indexOf(possibleName)
        if (headerIndex !== -1) {
            guessedFieldName = headers[headerIndex]
            break
        }
    }
    return guessedFieldName || defaultFieldName
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
    return {
        firstName: guessFieldName(headers, GUESS_NAME_FIELD_NAME, headers[0] || null),
        workPhone: guessFieldName(headers, GUESS_PHONE_FIELD_NAME, headers[1] || null),
        email: null,
        note: null,
    }
}

export const contactsToVcard = (contacts: Array<VcfContact>) => {
    const vCardStrings = []
    for (const contact of contacts) {
        const vCard = vCardsJS()
        Object.entries(contact).forEach(
            ([name, value]) => (vCard[name as VcfFieldName] = value)
        )
        vCardStrings.push(vCard.getFormattedString())
    }
    return vCardStrings.join('\n')
}
