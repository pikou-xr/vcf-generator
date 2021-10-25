import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { PhoneNumber } from '../types'
import isString from 'lodash.isstring'

export class FormatError extends Error {}

export const formatPhoneNumber = (phoneString: string): PhoneNumber => {
    if (!isString(phoneString)) {
        throw new FormatError(
            `Phone number should be a string "${phoneString}"`
        )
    }
    // TODO : configutable country code
    const phoneNumber = parsePhoneNumberFromString(phoneString, 'FR')
    if (phoneNumber && phoneNumber.isValid()) {
        return phoneNumber.number as PhoneNumber
    }
    // TODO : i18n
    throw new FormatError(`Invalid phone number "${phoneString}"`)
}
