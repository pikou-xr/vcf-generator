export type PhoneNumber = string

export type FieldName = string
export type DataHeaders = Array<FieldName>

export type RawDatum = {[key: string]: string}
export type RawData = Array<RawDatum>

export interface VcfContact {
    firstName: string
    workPhone: PhoneNumber
    email: string
    note: string
}