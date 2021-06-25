import React from 'react'
import styled from 'styled-components/macro'
import theme from '../../theme'
import { ParseError } from '../../utils/parsing'

export interface Props {
    errors: Array<ParseError>
    className?: string
}

const DataTableErrors: React.FunctionComponent<Props> = ({ 
    errors,
    className = ''
}) => {
    let errorsTitle: null | React.ReactFragment = null
    if (errors.length) {
        // TODO : i18n
        errorsTitle = <div>Il y a {errors.length} erreur(s) dans le fichier :</div>
    }
    return (
        <div className={className}>
            {errorsTitle}
            {errors.map((error, i) => <div key={i}>{error.message}</div>)}
        </div>
    )
}

export default styled(React.memo(DataTableErrors))`
    & > div {
        color: ${theme.colors.error};
    }
`