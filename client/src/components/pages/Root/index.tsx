import React from 'react'
import styled, { css } from 'styled-components'
import { CreateItemModal } from 'src/components/domain/CreateItemModal'
import { ItemList } from 'src/components/domain/ItemList'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

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
  return (
    <>
      <CssBaseline />
      <StyledContainer>
        <Area>
          <CreateItemModal />
        </Area>
        <Area>
          <ItemList />
        </Area>
      </StyledContainer>
    </>
  )
}
