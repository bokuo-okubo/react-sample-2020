import React from 'react'
import styled from 'styled-components'
import logo from 'src/assets/logo.svg'
import { Button } from 'src/components/common/Button'

const App = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #ab2c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Link = styled.a`
  color: #61dafb;
`

export const Root: React.FC = () => {
  return (
    <App>
      <AppHeader className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
        <div>{process.env.REACT_APP_ENDPOINT_URL}</div>
        <Button />
      </AppHeader>
    </App>
  )
}
