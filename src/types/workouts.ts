import { IExercise } from "./exercise";

export interface IWorkouts {
  title: string,
  duration: number,
  exersises: IExercise[]
}
