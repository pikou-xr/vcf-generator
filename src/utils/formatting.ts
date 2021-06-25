import parsePhoneNumber from 'libphonenumber-js'
import { PhoneNumber } from '../types'

class FormatError extends Error {}

export const formatPhoneNumber = (phoneString: string): PhoneNumber => {
    const phoneNumber = parsePhoneNumber(phoneString)
    if (phoneNumber && phoneNumber.isValid()) {
        return phoneNumber.number as PhoneNumber
    }
    throw new FormatError(`Invalid phone number ${phoneString}`)
}
