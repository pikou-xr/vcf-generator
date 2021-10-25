import { FieldName, SelectOptionValue } from "../types";

export const rawDataFieldNameToOption = (rawDataFieldName: FieldName): SelectOptionValue => ({
    value: rawDataFieldName,
    label: rawDataFieldName,
})