import { all, takeLatest, call, put, StrictEffect } from 'redux-saga/effects'
import { RawData } from '../types'
import { parseCsv, ParseResult } from '../utils/parsing'
import {
    RAW_DATA_LOAD_LOCAL,
    rawDataLoadComplete,
    RawDataLoadLocal,
} from './raw-data'

function* getAllRawData() {
    // const results: MultipleResultsWithErrors = yield loadSeveralCollectionsAndErrors(
    //     configDb,
    //     ['someModel']
    // )
    // const loadedData: { [key: string]: any } = {}
    // const errors: Array<[string, Error]> = []
    // Object.entries(results).forEach(
    //     ([collectionId, [error, validatedData]]) => {
    //         if (validatedData) {
    //             loadedData[collectionId] = validatedData
    //         }
    //         if (error) {
    //             errors.push([collectionId, error])
    //         }
    //     }
    // )
    // if (errors.length === 0) {
    //     yield put(
    //         rawDataLoadSuccess({
    //             someModel: loadedData.someModel,
    //         })
    //     )
    // } else {
    //     yield put(rawDataLoadError(errors))
    // }
}

function* rawDataLoadLocalSaga(
    action: RawDataLoadLocal
): Generator<StrictEffect, void, never> {
    const result: ParseResult = yield call(parseCsv, action.payload)
    yield put(rawDataLoadComplete(result))
}

function* rawDataLoadSaga(): Generator<StrictEffect, void, never> {
    yield takeLatest(RAW_DATA_LOAD_LOCAL, rawDataLoadLocalSaga)
}

export default function* rootSaga() {
    yield all([rawDataLoadSaga()])
}