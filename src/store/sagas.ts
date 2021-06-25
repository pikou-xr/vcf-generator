import {
    all,
    takeLatest,
    call,
    put,
    StrictEffect,
    select,
} from 'redux-saga/effects'
import { parseCsv, ParseResult } from '../utils/parsing'
import { getDefaultVcfFieldMapping } from '../utils/vcf'
import {
    RAW_DATA_LOAD_LOCAL,
    rawDataLoadComplete,
    RawDataLoadLocal,
} from './raw-data'
import { selectRawDataHeaders } from './selectors'
import { setVcfFieldMapping } from './vcf-field-mapping'

function* rawDataLoadLocalSaga(
    action: RawDataLoadLocal
): Generator<StrictEffect, void, never> {
    const result: ParseResult = yield call(parseCsv, action.payload)
    yield put(rawDataLoadComplete(result))
    const headers = yield select(selectRawDataHeaders)
    yield put(setVcfFieldMapping(getDefaultVcfFieldMapping(headers)))
}

function* rawDataLoadSaga(): Generator<StrictEffect, void, never> {
    yield takeLatest(RAW_DATA_LOAD_LOCAL, rawDataLoadLocalSaga)
}

export default function* rootSaga() {
    yield all([rawDataLoadSaga()])
}
