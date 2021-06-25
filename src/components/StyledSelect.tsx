import React from 'react'
import Select from 'react-select'
import styled from 'styled-components/macro'
import theme from '../theme'



// Wrapping in styled component allows to use the exported component 
// as a selector directly in other styled-components css code.
export default styled(Select)`
    .react-select__control {
        background-color: ${theme.colors.backgroundButton};
        border-color: ${theme.colors.main};
        .react-select__single-value {
            color: ${theme.colors.main};
        }
    }
`