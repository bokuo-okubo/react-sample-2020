import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    justifyContent: 'space-around',
    width: 400,
    minHeight: 800,
    height: 1000,
    transform: 'translateZ(0)',
    padding: '10px'
  }
}))

interface Props<T> {
  contents: T[]
  renderRow: (props: { index: number; data: T }) => React.ReactElement
}

export function SingleLineGridList<T>({ contents, renderRow }: Props<T>) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1} spacing={2}>
        {contents.map((content, index) => renderRow({ index, data: content }))}
      </GridList>
    </div>
  )
}
