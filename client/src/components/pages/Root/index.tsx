import React from 'react'
import styled from 'styled-components'
import { Button } from 'src/components/common/Button'
import { ItemCard } from 'src/components/common/ItemCard'
import { VirtualizedList } from 'src/components/common/List'

import contents, { ContentTypes } from './stub-contents'

const App = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #ab2c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`

const List = styled.div`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
`

export const Root: React.FC = () => {
  return (
    <App>
      <AppHeader className="App-header">
        <div>ENDPOINT_URL: {process.env.REACT_APP_ENDPOINT_URL}</div>
        <Button />
        <VirtualizedList<ContentTypes>
          contents={contents}
          renderRow={({ index, data }) => (
            <div key={'index' + index}>
              <ItemCard title={data.title} body={data.body} />
            </div>
          )}
        />
      </AppHeader>
    </App>
  )
}
