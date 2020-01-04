import React from 'react'
import MuiButton, { ButtonProps } from '@material-ui/core/Button'

interface Props extends ButtonProps {
  onClick: () => Promise<void> | Promise<undefined> | undefined | void
}

export const Button: React.FC<Props> = ({ onClick, children, disabled }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  )
}
