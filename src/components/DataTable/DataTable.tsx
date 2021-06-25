import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'
import theme from '../../theme'
import { DataHeaders } from '../../types'
import DataTableErrors from './DataTableErrors'
import DataTableHeaders from './DataTableHeaders'
import DataTableRow from './DataTableRow'

export interface Props<D> {
    className?: string
    data: Array<D>
    headers: DataHeaders
    headersDisplayMapping?: { [fieldName: string]: string }
    errors: Array<Error>
}

const DataTable = <D,>({
    data,
    headers,
    headersDisplayMapping,
    errors,
    className = '',
}: PropsWithChildren<Props<D>>) => {
    const headersDisplay = headersDisplayMapping
        ? headers.map(
              (fieldName) => headersDisplayMapping[fieldName] || fieldName
          )
        : headers
    return (
        <div className={className}>
            <DataTableContainer>
                <table>
                    <thead>
                        <DataTableHeaders headers={headersDisplay} />
                    </thead>
                    <tbody>
                        {data.map((datum, i) => (
                            <DataTableRow
                                datum={datum}
                                headers={headers}
                                key={i}
                            />
                        ))}
                    </tbody>
                </table>
            </DataTableContainer>
            <DataTableErrors errors={errors} />
        </div>
    )
}

const DataTableContainer = styled.div``

export default styled(React.memo(DataTable))`
    color: ${theme.colors.tableContent};
    ${DataTableContainer} {
        position: relative;
        max-height: 10em;
        overflow: auto;

        table {
            width: 100%;
        }
    }
`
