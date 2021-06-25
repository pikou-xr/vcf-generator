import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import AppPanel from './components/AppPanel'
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
            {/* TODO : i18n */}
            <h1>Générateur de fichier de contacts</h1>
            <AppPanel title="1. Upload un fichier CSV">
                <DragDropFile />
            </AppPanel>
            {rawData ? (
                <AppPanel title="2. Données brutes">
                    <RawDataView />
                </AppPanel>
            ) : null}
            {rawData ? (
                <AppPanel title="3. Selection des champs à exporter">
                    <VcfFieldMapper />
                </AppPanel>
            ) : null}
            {rawData ? (
                <AppPanel title="4. Données exportées">
                    <VcfContactsView />
                </AppPanel>
            ) : null}
            {rawData ? (
                <AppPanel title="5. Options">
                    <OutputOptions />
                </AppPanel>
            ) : null}
            {rawData ? (
                <AppPanel title="6. Export">
                    <DownloadVcfFile />
                </AppPanel>
            ) : null}
        </div>
    )
}

export default styled(React.memo(App))`
    height: 100%;
    overflow: auto;
    max-width: 1000px;
    margin: auto;
`
