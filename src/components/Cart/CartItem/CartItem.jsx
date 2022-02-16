import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'

import useStyle from './style'

const CartItem = ({item}) => {
  const classes = useStyle()
  console.log(item)
  if (!item) {
      return ''
  }
  return (
    <Card>
        <CardMedia image={item.image.url} component="img" height={300} alt={item.name} className={classes.media}></CardMedia>
        <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions>
            <div className={classes.buttons}>
                <Button type='button' size='small'>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' size='small'>+</Button>
            </div>
            <Button variant='contained' type='button' color='secondary'>Remove</Button>
        </CardActions>
    </Card>  
  )
}

export default CartItem