import React, { PropsWithChildren, useState } from 'react'
import styled from 'styled-components/macro'
import theme from '../../theme'
import { DataHeaders } from '../../types'
import DataTableErrors from './DataTableErrors'
import DataTableHeaders from './DataTableHeaders'
import DataTableRow from './DataTableRow'

const PREVIEW_SIZE = 10

export interface Props<D> {
    className?: string
    data: Array<D>
    headers: DataHeaders
    errors: Array<Error>
}

const DataTable = <D, >({data, headers, errors, className = ''}: PropsWithChildren<Props<D>>) => {
    const [isDataCollapsed, setIsDataCollapsed] = useState(true)
    const onDataExpandCollapseClicked = () => {
        setIsDataCollapsed(!isDataCollapsed)
    }
    const collapsedData = isDataCollapsed ? data.slice(0, PREVIEW_SIZE) : data
    return (
        <div className={className}>
            <DataTableContainer>
                <table>
                    <thead>
                        <DataTableHeaders headers={headers} />
                    </thead>
                    <tbody>
                        {collapsedData.map((datum, i) => (
                            <DataTableRow
                                datum={datum}
                                headers={headers}
                                key={i}
                            />
                        ))}
                    </tbody>
                </table>
                <DataTableExpandCollapseContainer
                    isDataCollapsed={isDataCollapsed}
                    onClick={onDataExpandCollapseClicked}
                >
                    <button>{isDataCollapsed ? '↓' : '↑'}</button>
                </DataTableExpandCollapseContainer>
            </DataTableContainer>
            <DataTableErrors errors={errors} />
        </div>
    )
}

const DataTableContainer = styled.div``
const DataTableExpandCollapseContainer = styled.div<{
    isDataCollapsed: boolean
}>`
    ${(props) => (props.isDataCollapsed ? `position: absolute;` : '')}
`

export default styled(React.memo(DataTable))`
    ${DataTableContainer} {
        position: relative;
        ${DataTableExpandCollapseContainer} {
            cursor: pointer;
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
