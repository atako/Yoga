import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const AsanaInstruction = (props) => {
  const asanaImage = !props.detail.image ? null : <div className="thumbnail"><img width = "180" height="180" src={props.detail.image} /></div>;
  return (
    <Grid container gutter={24}>
      <Grid item md={10}>
        <Paper>
          <Typography type="body1" component="p">
            {`${props.index+1}  `}
            {props.detail.title}
            <img src={props.detail.image} />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AsanaInstruction