import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element: JSX.Element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function SynthList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="APPL"
                  />
                  <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                      <ThumbDownIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <ThumbUpIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
    </div>
  );
}
