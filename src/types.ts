export type PhoneNumber = string

export type FieldName = string
export type DataHeaders = Array<FieldName>

export type RawDatum = { [key: string]: string }
export type RawData = Array<RawDatum>

export type AnyDatum = { [fieldName: string]: any }

export interface SelectOptionValue {
    value: FieldName
    label: string
}
