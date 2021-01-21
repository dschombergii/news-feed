import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { title, url, points, author, created_at } = props
  const [isMinimized, setMinimized] = useState(false)
  const [isHidden, setHidden] = useState(false)

  function handleMinimizeClick() {
    if (!isMinimized) {
      setMinimized(true)
    } else {
      setMinimized(false)
    }
  }

  function handleHiddenClick() {
    if (!isHidden) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }

  if (!isMinimized && !isHidden) {
    return (

      <Card style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }} className={classes.root}>
        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography style={{ display: 'flex', marginRight: '50px' }} variant="h5" component="h2">
              {title}
            </Typography>
          </div>



          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography style={{ margin: '20px' }} className={classes.pos} color="textSecondary">
              POINTS {points}
            </Typography>
            <Typography style={{ margin: '20px' }} className={classes.pos} color="textSecondary">
              AUTHOR {author}
            </Typography>
            <Typography style={{ margin: '20px' }} className={classes.pos} color="textSecondary">
              CREATED_AT {created_at}
            </Typography>
          </div>




        </CardContent>
        <div style={{ marginLeft: '5px' }}>
        </div>
        <CardActions>
          <Button style={{ border: '1px solid green' }} size="small" onClick={handleMinimizeClick}><a style={{ textDecoration: "none" }} href={url} target="_blank">GO TO ARTICLE</a></Button>
          <Button style={{ border: '1px solid blue' }} size="small" onClick={handleMinimizeClick}>View Later</Button>
          <Button style={{ border: '1px solid red' }} size="small" onClick={handleHiddenClick}>Not Interested</Button>
        </CardActions>
      </Card>
    )


  } else if (isMinimized && !isHidden) {
    return (
      <Card style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }} className={classes.root}>
        <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography style={{ display: 'flex', marginRight: '50px' }} variant="h5" component="h2">
              {title}
            </Typography>
          </div>




        </CardContent>

        <CardActions>
          <Button style={{ border: '1px solid green' }} size="small" onClick={handleMinimizeClick}>View Now</Button>
          <Button style={{ border: '1px solid red' }} size="small" onClick={handleHiddenClick}>Not Interested</Button>
        </CardActions>
      </Card>
    )
  } else {
    return (
      <p></p>
    )
  }
}


