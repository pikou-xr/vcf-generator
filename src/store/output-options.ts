import { FieldName } from "../types"

// ------------- Action Types ------------ //
export const OUTPUT_OPTIONS_SET_PREFIX = 'OUTPUT_OPTIONS_SET_PREFIX'
export const OUTPUT_OPTIONS_SET_GROUP_BY_FIELD = 'OUTPUT_OPTIONS_SET_GROUP_BY_FIELD'

export interface SetOutputOptionsPrefix {
    type: typeof OUTPUT_OPTIONS_SET_PREFIX
    payload: string
}

export interface SetOutputOptionsGroupByField {
    type: typeof OUTPUT_OPTIONS_SET_GROUP_BY_FIELD
    payload: string | null
}

export type OutputOptionsTypes = SetOutputOptionsPrefix | SetOutputOptionsGroupByField

// ------------ Action Creators ---------- //
export const setOutputOptionsPrefix = (prefix: string): OutputOptionsTypes => {
    return {
        type: OUTPUT_OPTIONS_SET_PREFIX,
        payload: prefix,
    }
}

export const setOutputOptionsGroupByField = (fieldName: FieldName | null): OutputOptionsTypes => {
    return {
        type: OUTPUT_OPTIONS_SET_GROUP_BY_FIELD,
        payload: fieldName,
    }
}

// ----------------- State --------------- //
export interface OutputOptionsState {
    prefix: string
    groupByField: FieldName | null
}

const initialState: OutputOptionsState = {
    prefix: 'XR ACTION ',
    groupByField: null
}

// ---------------- Reducer -------------- //
export function outoutOptionsReducer(
    state = initialState,
    action: OutputOptionsTypes
): OutputOptionsState {
    switch (action.type) {
        case OUTPUT_OPTIONS_SET_PREFIX:
            return { ...state, prefix: action.payload }
        case OUTPUT_OPTIONS_SET_GROUP_BY_FIELD:
            return { ...state, groupByField: action.payload }
        default:
            return state
    }
}
