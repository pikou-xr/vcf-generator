import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import DragDropFile from './components/DragDropFile'
import RawDataView from './components/RawDataView'
import { selectRawData } from './store/selectors'

const App = ({ className = '' }) => {
    const rawData = useSelector(selectRawData)
    return (
        <div className={className}>
            <DragDropFile />
            {rawData ? <RawDataView /> : null}
        </div>
    )
}

export default styled(React.memo(App))`
    height: 100%;
    overflow: auto;
`
