import MoodIcon from '@material-ui/icons/Mood';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';

type Rating = 'great'  | 'well' | 'normally' | 'badly' | 'terrible'

export enum RatingEmoji {
  'great' = 'Mood',
  'well' = 'SentimentSatisfied',
  'normally' = 'SentimentDissatisfied',
  'badly' = 'SentimentVeryDissatisfied',
  'terrible' = 'MoodBad'

}

export interface ICalendarCell {
  check: boolean,
  width: number,
  x: number,
  y: number,
  date: Date,
  exercise?: object
}

export interface ICalendarCol {
  x: number,
  days?: ICalendarDay[]
}


export interface ICalendarDay {
  date: Date,
  check: boolean
}

interface IDoneWorkouts {
  id: number,
  date: Date,
  woukoutType: number,
  rating: Rating
}