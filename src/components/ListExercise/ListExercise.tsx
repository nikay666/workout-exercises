import { createStyles, List, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { IExercise } from '../../types/exercise'
import { ItemExercise } from './ItemExercise'


const exercises: IExercise[] = [
  {
    id: 1,
    title: 'Title',
    description: 'Lorem Ipsum',
    media: 'https://гифки.рус/uploads/posts/2018-04/1524579049_1674-gifka-prisedaniya.gif',
    tags: ['legs', 'buttoks']
  }, 
  {
    id: 2,
    title: 'Title',
    description: 'Lorem Ipsum',
    media: 'https://гифки.рус/uploads/posts/2018-04/1524579049_1674-gifka-prisedaniya.gif',
    tags: ['legs', 'buttoks']
  },
  {
    id: 3,
    title: 'Title',
    description: 'Lorem Ipsum',
    media: 'https://гифки.рус/uploads/posts/2018-04/1524579049_1674-gifka-prisedaniya.gif',
    tags: ['legs', 'buttoks']
  }
]


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2)
    },
  })
)


export const ListExercise = () => {
  const classes = useStyles()


  return (
    <List  className={classes.root}>
        {
          exercises.map(el => (
            <ItemExercise  
              id={el.id}
              key={el.id}
              title={el.title}
              description={el.description}
              media={el.media}
              tags={el.tags}
            />
          ))
        }
      </List>
  )
}
