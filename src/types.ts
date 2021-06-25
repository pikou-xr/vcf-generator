export type PhoneNumber = string

export type FieldName = string
export type DataHeaders = Array<FieldName>

export type RawDatum = {[key: string]: string}
export type RawData = Array<RawDatum>

export type AnyDatum = {[fieldName: string]: any}

// VCF Fields optional
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