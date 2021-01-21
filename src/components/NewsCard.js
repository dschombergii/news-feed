import React from 'react';
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

  return (
    <Card style={{display: 'flex', justifyContent: 'space-around'}}className={classes.root}>
      <CardContent style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Typography variant="h5" component="h2">
          TITLE {title}
          </Typography>
          <Typography variant="h5" component="h2">
          URL {url}
          </Typography>
        </div>

        <div style={{display: 'flex'}}>
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
      <CardActions>
        <Button style={{border: '1px solid red'}} size="small">View Later</Button>
        <Button style={{border: '1px solid red'}} size="small">Not Interested</Button>
      </CardActions>
    </Card>
  );
}