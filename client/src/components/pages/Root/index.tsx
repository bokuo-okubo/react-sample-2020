import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'src/components/universal/Button'
import { ItemCard } from 'src/components/universal/ItemCard'
import { SingleLineGridList } from 'src/components/universal/GridList'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import contents, { ContentTypes } from './stub-contents'
import { useRootQuery, ItemType } from 'src/gql.gen'

const baseWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const StyledContainer = styled(Container)`
  ${baseWrapperCss}
  min-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: #ab2c34;
  padding: 5px;
`

const Area = styled.div`
  ${baseWrapperCss}
  margin: 10px;
`

export const Root: React.FC = () => {
  const { loading, error, data: remoteData } = useRootQuery()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <CssBaseline />
      <StyledContainer>
        <Area>
          <Button />
        </Area>
        <Area>
          <SingleLineGridList<ItemType>
            contents={remoteData ? remoteData.items : []}
            renderRow={({ data }) => (
              <ItemCard
                title={data.title}
                body={data.description}
                imageUrl={data.imageUrl}
              />
            )}
          />
        </Area>
      </StyledContainer>
    </>
  )
}
