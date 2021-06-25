import {parsePhoneNumberFromString} from 'libphonenumber-js'
import { PhoneNumber } from '../types'

export class FormatError extends Error {}

export const formatPhoneNumber = (phoneString: string): PhoneNumber => {
    // TODO : configutable country code
    const phoneNumber = parsePhoneNumberFromString(phoneString, 'FR')
    if (phoneNumber && phoneNumber.isValid()) {
        return phoneNumber.number as PhoneNumber
    }
    // TODO : i18n
    throw new FormatError(`Invalid phone number "${phoneString}"`)
}
