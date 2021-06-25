// ------------- Action Types ------------ //
export const OUTPUT_OPTIONS_SET_PREFIX = 'OUTPUT_OPTIONS_SET_PREFIX'

export interface SetOutputOptionsPrefix {
    type: typeof OUTPUT_OPTIONS_SET_PREFIX
    payload: string
}

export type OutputOptionsTypes = SetOutputOptionsPrefix

// ------------ Action Creators ---------- //
export const setOutputOptionsPrefix = (
    prefix: string
): OutputOptionsTypes => {
    return {
        type: OUTPUT_OPTIONS_SET_PREFIX,
        payload: prefix,
    }
}

// ----------------- State --------------- //
export interface OutputOptionsState {
    prefix: string
}

const initialState: OutputOptionsState = {
    prefix: 'XR ACTION '
}

// ---------------- Reducer -------------- //
export function outoutOptionsReducer(
    state = initialState,
    action: OutputOptionsTypes
): OutputOptionsState {
    switch (action.type) {
        case OUTPUT_OPTIONS_SET_PREFIX:
            return {...state, prefix: action.payload}
        default:
            return state
    }
}
