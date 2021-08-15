import MoodIcon from '@material-ui/icons/Mood';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';

type Rating = 'great'  | 'well' | 'normally' | 'badly' | 'terrible'

export enum RatingEmoji {
  'great' = 'mood',
  'well' = 'sentiment_satisfied',
  'normally' = 'sentiment_dissatisfied',
  'badly' = 'sentiment_very_dissatisfied',
  'terrible' = 'mood_bad'

}

export interface ICalendarCell {
  check: boolean,
  width: number,
  x: number,
  y: number,
  date: string,
  workouts?: Array<IDoneWorkouts>
}

export interface ICalendarCol {
  x: number,
  days?: ICalendarDay[],
}


export interface ICalendarDay {
  id: number,
  date: string,
  check: boolean,
  workouts?: Array<IDoneWorkouts>
}


export interface IDoneWorkoutsByDates {
  id: number,
  date: string,
  workouts: IDoneWorkouts[]
}
export interface IDoneWorkouts {
  id: number,
  date: string,
  workoutTitle: string,
  workoutType: string,
  rating: Rating
}