
export const formatDateToUs = (date: Date) => {
  return new Intl.DateTimeFormat('en-US',{
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format(date)
}
