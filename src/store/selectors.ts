import { RootState } from "."

export const selectRawData = (state: RootState) => 
    state.rawData.data

export const selectRawDataSafe = (state: RootState) => {
    if (!state.rawData.data) {
        throw new Error(`expected data not null`)
    }
    return state.rawData.data
}

export const selectRawDataErrors = (state: RootState) => state.rawData.errors

export const selectRawDataHeaders = (state: RootState) => {
    const rawData = selectRawDataSafe(state)
    if (!rawData.length) {
        return []
    }
    return Object.keys(rawData[0])
}