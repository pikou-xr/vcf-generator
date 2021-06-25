import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import DownloadVcfFile from './components/DownloadVcfFile'
import DragDropFile from './components/DragDropFile'
import OutputOptions from './components/OutputOptions'
import RawDataView from './components/RawDataView'
import VcfContactsView from './components/VcfContactsView'
import VcfFieldMapper from './components/VcfFieldMapper/VcfFieldMapper'
import { selectRawData } from './store/selectors'

const App = ({ className = '' }) => {
    const rawData = useSelector(selectRawData)
    return (
        <div className={className}>
            <DragDropFile />
            {rawData ? <RawDataView /> : null}
            {rawData ? <VcfFieldMapper /> : null}
            {rawData ? <VcfContactsView /> : null}
            {rawData ? <OutputOptions /> : null}
            {rawData ? <DownloadVcfFile /> : null}
        </div>
    )
}

export default styled(React.memo(App))`
    height: 100%;
    overflow: auto;
`
