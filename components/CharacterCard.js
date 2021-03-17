import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Container, Grid, Paper, CardMedia, Typography} from '@material-ui/core';

import Image from 'next/image';
const useStyles = makeStyles({
    root: {
      minWidth: 320,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
  
const CharacterCard = () => {
    const classes = useStyles();
    return ( 
       
        
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2" color="initial">
                  Character Name
                </Typography>
                <Typography className={classes.pos}>
                  Subtitle or description
                </Typography>
                <CardMedia className={classes.media}>
                <Image 
                    src="/assets/imgs/chars/choo.png"
                    alt="Placaholder"
                    width={480}
                    height={640}
                    />
                </CardMedia>
              </CardContent>
            </Card>
    );
}
 
export default CharacterCard;