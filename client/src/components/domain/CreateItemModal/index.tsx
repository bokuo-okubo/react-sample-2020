import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { InputModal } from 'src/components/universal/InputModal'
import { checkUrl } from 'src/utils/checkUrl'
import { useInput } from './useFormInput'

import { useCreateItemMutation } from 'src/gql.gen'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  })
)

export const CreateItemModal: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  const [createItemApi] = useCreateItemMutation()

  const titleOp = useInput('')
  const priceOp = useInput('', str => !str || !parseInt(str, 10))
  const descOp = useInput('')
  const imageUrlOp = useInput(
    'http://design-ec.com/d/e_others_50/l_e_others_500.png',
    str => !str || checkUrl(str)
  )

  const onSubmit = async () => {
    setLoading(true)
    await createItemApi({
      variables: {
        title: titleOp.value,
        price: parseInt(priceOp.value, 10),
        description: descOp.value,
        imageUrl: imageUrlOp.value
      }
    })
    setLoading(false)
  }

  const classes = useStyles()

  const notyet = [titleOp, priceOp, descOp, imageUrlOp].some(op => op.error)

  return (
    <>
      <InputModal
        buttonText="Create New Item"
        onSubmit={onSubmit}
        loading={loading}
        disabled={notyet}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl error={titleOp.error}>
            <InputLabel htmlFor="component-simple">Title</InputLabel>
            <Input
              id="component-simple"
              placeholder={'title'}
              value={titleOp.value}
              onChange={titleOp.onChange}
            />
          </FormControl>

          <FormControl error={priceOp.error}>
            <InputLabel htmlFor="component-simple">Price</InputLabel>
            <Input
              id="component-simple"
              placeholder={'1000'}
              value={priceOp.value}
              onChange={priceOp.onChange}
            />
          </FormControl>

          <FormControl error={descOp.error}>
            <InputLabel htmlFor="component-simple">Description</InputLabel>
            <Input
              id="component-simple"
              placeholder={'description\ndescription\ndescription\n'}
              value={descOp.value}
              onChange={descOp.onChange}
              multiline
              rows="4"
            />
          </FormControl>

          <FormControl error={imageUrlOp.error}>
            <InputLabel htmlFor="component-simple">Image URL</InputLabel>
            <Input
              id="component-simple"
              placeholder={'1000'}
              value={imageUrlOp.value}
              onChange={imageUrlOp.onChange}
            />
          </FormControl>
        </form>
      </InputModal>
    </>
  )
}
