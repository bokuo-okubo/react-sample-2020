import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'src/components/common/Button'
import { ItemCard } from 'src/components/common/ItemCard'
import { SingleLineGridList } from 'src/components/common/GridList'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import contents, { ContentTypes } from './stub-contents'

const baseWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const StyledContainer = styled(Container)`
  ${baseWrapperCss}

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
  return (
    <>
      <CssBaseline />
      <StyledContainer>
        <Area>
          <Button />
        </Area>
        <Area>
          <SingleLineGridList<ContentTypes>
            contents={contents}
            renderRow={({ data }) => (
              <ItemCard
                title={data.title}
                body={data.body}
                imageUrl={data.imageUrl}
              />
            )}
          />
        </Area>
      </StyledContainer>
    </>
  )
}
