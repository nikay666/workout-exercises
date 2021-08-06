import { ICalendarDay, IDoneWorkouts } from "../types/Calendar"
import { formatDateToUs } from "../utilits/formatDateToUs"


export const useFillCalendar = (workoutsArray: IDoneWorkouts[])=> {
  const yearCout = 364
  const YearMs = 31536000000
  const today =  new Date()
  const yearAgo =  new Date(today.valueOf() - YearMs)

  const ArrayYearDays: ICalendarDay[] = new Array(yearCout).fill(1).map((_, i) => ({
    id: i, 
    date: formatDateToUs(new Date(yearAgo.setDate(yearAgo.getDate() + 1))),
    check: false,
    workouts: []
  }))

  const fillCalendar = (year: ICalendarDay[], workouts: IDoneWorkouts[] ): ICalendarDay[] => {
    for (let i = 0; i < year.length; i++) {
      const day = year[i];
      for (let j = 0; j < workouts.length; j++) {
        const workout = workouts[j];
        if (day.date === workout.date){
           day.workouts?.push(workout) 
           day.check = true
         }
      }
    }
    return year
   }
   
   const createColumns = (workouts: IDoneWorkouts[]) => {
    let arr:ICalendarDay[] = []
    const result: Array<ICalendarDay[]> = []
    const fillYear = fillCalendar(ArrayYearDays, workouts )
  
  
    fillYear.forEach((el,i) => {
      arr.push(el)
      if((i + 1) % 7 === 0){
        result.push(arr)
        arr = []
      }
    })
    return result
  }
  
  return createColumns(workoutsArray)

}