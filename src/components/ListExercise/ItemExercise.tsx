import { Avatar, Chip, createStyles, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { IExercise } from '../../types/exercise'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      gap: theme.spacing(2),
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16)
    },
    tags: {
      display: 'flex',
      gap: theme.spacing(1)
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1
    },
    icon: {
      cursor: 'pointer',
    }
  })
)


export const ItemExercise = ({id, media, title , description, tags}: IExercise) => {
  const classes = useStyles()
  const [favorite, setFavorite] = useState(false)

  return (
    <ListItem className={classes.root}> 
      <ListItemAvatar>
        <Avatar src={media} variant='rounded' className={classes.avatar} />
      </ListItemAvatar>
      <div className={classes.content}>
        <ListItemText 
          primary={title}
          secondary={description}
        />
        <div className={classes.tags}>
          {
            tags.map(tag => (
              <Chip key={tag} label={tag} variant="outlined" color="primary" />
            ))
          }
        </div>
      </div>

      <ListItemIcon className={classes.icon} onClick={() => setFavorite(!favorite)} >
          {favorite 
            ? <FavoriteIcon/> 
            : <FavoriteBorderIcon/>
          }
      </ListItemIcon>
    </ListItem>
  )
}
