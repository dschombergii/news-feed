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
  const {title, url, points, author, created_at} = props
  const [isVisible, setVisible] = useState(true)

  function handleHiddenClick() {
    if(isVisible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  if(isVisible) {
    return (
      
        <Card style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}className={classes.root}>
        <CardContent style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Typography style={{display: 'flex', marginRight: '50px'}} variant="h5" component="h2">
            {title}
            </Typography>
          </div>
    
          
    
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Typography style={{margin: '20px'}} className={classes.pos} color="textSecondary">
            POINTS {points}
            </Typography>
            <Typography style={{margin: '20px'}} className={classes.pos} color="textSecondary">
            AUTHOR {author}
            </Typography>
            <Typography style={{margin: '20px'}} className={classes.pos} color="textSecondary">
            CREATED_AT {created_at}
            </Typography>
          </div>
    
          
          
          
        </CardContent>
        <div style={{marginLeft: '5px'}}>
          <Typography variant="h5" component="h2">
              <a style={{fontSize: '60%'}} href={url}>GO TO ARTICLE</a>
            
            </Typography>
          </div>
        <CardActions>
          <Button style={{border: '1px solid red'}} size="small" onClick={handleHiddenClick}>View Later</Button>
          <Button style={{border: '1px solid red'}} size="small" onClick={handleHiddenClick}>Not Interested</Button>
        </CardActions>
      </Card>
    )
        
    
  } else {
    return (
      <Card style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}className={classes.root}>
        <CardContent style={{display: 'flex', flexDirection: 'column'}}>
          
    
          
          
          
        </CardContent>
        
        <CardActions>
          <Button style={{border: '1px solid green'}} size="small" onClick={handleHiddenClick}>View Now</Button>
          <Button style={{border: '1px solid green'}} size="small" onClick={handleHiddenClick}>Not Interested</Button>
        </CardActions>
      </Card>
    )
  }
}


