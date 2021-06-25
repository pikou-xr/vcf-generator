import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import { rawDataReducer } from './raw-data'
import { vcfFieldMappingReducer } from './vcf-field-mapping'
import { outoutOptionsReducer } from './output-options'

const rootReducer = combineReducers({
    rawData: rawDataReducer,
    vcfFieldMapping: vcfFieldMappingReducer,
    outputOptions: outoutOptionsReducer,
})

const sagaMiddleware = createSagaMiddleware()

export type RootState = ReturnType<typeof rootReducer>

const enhancers = [applyMiddleware(sagaMiddleware)]
if (
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
    enhancers.push(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
}

const preloadedState = {}

export const store = createStore(
    rootReducer,
    preloadedState,
    compose(...enhancers)
)

sagaMiddleware.run(rootSaga)
