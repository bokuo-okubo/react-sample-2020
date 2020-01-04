import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    width: 345,
    // HACK:
    marginBottom: '10px'
  },
  media: {
    height: 180
  }
})

export interface Props {
  title?: string | undefined
  desc?: string | undefined
  imageUrl?: string | undefined
  updated?: string | undefined
  price?: number | undefined
}

export const ItemCard: React.FC<Props> = ({
  title,
  desc,
  imageUrl,
  price,
  updated
}) => {
  const classes = useStyles({})

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            price: <b>{price}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            desc: <b>{desc}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            last updated at: <b>{updated}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}
