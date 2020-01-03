import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import { FixedSizeList } from 'react-window'

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // height: 400,
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

interface Props<T> {
  contents: ArrayLike<T>
  renderRow: (props: {
    index: number
    style: {}
    data: T
  }) => React.ReactElement
}

export function VirtualizedList<T>({ contents, renderRow }: Props<T>) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FixedSizeList
        height={800}
        width={500}
        itemSize={200}
        itemData={contents}
        itemCount={contents.length}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  )
}
