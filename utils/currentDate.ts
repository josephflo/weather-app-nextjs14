export const getCurrentDate = () => {
  const currenDate = new Date().toLocaleDateString('en-us', {
    weekday:'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return currenDate
}