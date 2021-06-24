import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import { Provider } from 'react-redux'
import { store } from './store'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    body {
        color: ${theme.colors.main};
        background-color: ${theme.colors.background};
        font-size: ${theme.fontSizes.desktop}px;
        @media (max-width: ${theme.dimensions.thresholdMobile}px) {
            font-size: ${theme.fontSizes.mobile}px;
        }
        font-family: ${theme.fonts.default};
    }
`

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
