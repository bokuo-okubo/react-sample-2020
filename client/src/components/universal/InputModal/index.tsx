import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiModal from '@material-ui/core/Modal'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Button } from 'src/components/universal/Button'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

interface Props<SubmitValue> {
  disabled?: boolean | undefined
  loading?: boolean | undefined
  onSubmit: () => Promise<void> | void
  buttonText: string
  debug?: boolean
}

export function InputModal<T>({
  disabled,
  loading,
  onSubmit,
  buttonText,
  children,
  debug
}: Props<T> & { children?: React.ReactNode }) {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <MuiModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={debug || open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          {children}
          <Button
            disabled={loading || disabled}
            onClick={async () => {
              await onSubmit()
              handleClose()
            }}
          >
            submit
          </Button>
          {loading && (
            <CircularProgress
              style={{ position: 'relative', left: '20px', top: '18px' }}
            />
          )}
        </div>
      </MuiModal>
    </div>
  )
}
