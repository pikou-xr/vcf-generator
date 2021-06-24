import { RawData } from '../types'
import { ParseError, ParseResult } from '../utils/parsing'

// ---------- Types definitions ---------- //

// empty

// ------------- Action Types ------------ //
export const RAW_DATA_LOAD_LOCAL = 'RAW_DATA_LOAD_LOCAL'
export const RAW_DATA_LOAD_COMPLETE = 'RAW_DATA_LOAD_COMPLETE'
export const RAW_DATA_LOAD_ERROR = 'RAW_DATA_LOAD_ERROR'

export interface RawDataLoadLocal {
    type: typeof RAW_DATA_LOAD_LOCAL
    payload: File
}

export interface RawDataLoadComplete {
    type: typeof RAW_DATA_LOAD_COMPLETE
    payload: ParseResult
}

export type RawDataTypes = RawDataLoadLocal | RawDataLoadComplete

// ------------ Action Creators ---------- //
export const rawDataLoadLocal = (file: File): RawDataTypes => {
    return {
        type: RAW_DATA_LOAD_LOCAL,
        payload: file,
    }
}

export const rawDataLoadComplete = (result: ParseResult): RawDataTypes => {
    return {
        type: RAW_DATA_LOAD_COMPLETE,
        payload: result,
    }
}

// ----------------- State --------------- //
export interface RawDataState {
    data: RawData | null
    errors: Array<ParseError>
}

const initialState: RawDataState = {
    data: null,
    errors: [],
}

// ---------------- Reducer -------------- //
export function rawDataReducer(
    state = initialState,
    action: RawDataTypes
): RawDataState {
    switch (action.type) {
        case RAW_DATA_LOAD_LOCAL:
            return {
                ...state,
                data: null,
                errors: [],
            }
        case RAW_DATA_LOAD_COMPLETE:
            return {
                ...state,
                data: action.payload.data,
                errors: action.payload.errors,
            }
        default:
            return state
    }
}
