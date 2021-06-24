import React from 'react'
import styled from 'styled-components/macro'
import theme from '../../theme'
import { ParseError } from '../../utils/parsing'

export interface Props {
    errors: Array<ParseError>
    className?: string
}

const RawDataErrors: React.FunctionComponent<Props> = ({ 
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
            {errors.map(error => <div>{error.message}</div>)}
        </div>
    )
}

export default styled(React.memo(RawDataErrors))`
    & > div {
        color: ${theme.colors.error};
    }
`