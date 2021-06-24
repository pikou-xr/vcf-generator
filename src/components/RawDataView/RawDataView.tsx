import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { selectRawDataSafe, selectRawDataErrors, selectRawDataHeaders } from '../../store/selectors'
import theme from '../../theme'
import RawDataErrors from './RawDataErrors'
import RawDataHeaders from './RawDataHeaders'
import RawDatumView from './RawDatumView'

const PREVIEW_SIZE = 10

export interface Props {
    className?: string
}

const RawDataView: React.FunctionComponent<Props> = ({ className = '' }) => {
    const [isDataCollapsed, setIsDataCollapsed] = useState(true)
    const allData = useSelector(selectRawDataSafe)
    const headers = useSelector(selectRawDataHeaders)
    const errors = useSelector(selectRawDataErrors)
    if (!allData) {
        return null
    }

    const onDataExpandCollapseClicked = () => {
        setIsDataCollapsed(!isDataCollapsed)
    }

    const data = isDataCollapsed ? allData.slice(0, PREVIEW_SIZE) : allData
    return (
        <div className={className}>
            <DataTableContainer>
                <table>
                    <RawDataHeaders headers={headers} />
                    {data.map((datum, i) => (
                        <RawDatumView datum={datum} headers={headers} key={i} />
                    ))}
                </table>
                <DataTableExpandCollapseContainer
                    isDataCollapsed={isDataCollapsed}
                    onClick={onDataExpandCollapseClicked}
                >
                    <button>{isDataCollapsed ? '↓' : '↑'}</button>
                </DataTableExpandCollapseContainer>
            </DataTableContainer>
            <RawDataErrors errors={errors} />
        </div>
    )
}

const DataTableContainer = styled.div``
const DataTableExpandCollapseContainer = styled.div<{
    isDataCollapsed: boolean
}>`
    ${(props) => (props.isDataCollapsed ? `position: absolute;` : '')}
`

export default styled(React.memo(RawDataView))`
    ${DataTableContainer} {
        position: relative;
        ${DataTableExpandCollapseContainer} {
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            background: linear-gradient(
                0deg,
                ${theme.colors.background} 10%,
                rgba(255, 255, 255, 0) 96%
            );
            padding: 1em 0;

            button {
                font-size: 200%;
                padding: 0.5em;
                background: ${theme.colors.background};
                border: none;
                color: ${theme.colors.main};
            }
        }
    }
`
