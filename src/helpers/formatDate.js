export const formatDate = (date) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear().toString().slice(-2)
  return `${day < 10 ? '0' + day : day}.${
    month < 10 ? '0' + month : month
  }.${year}`
}
