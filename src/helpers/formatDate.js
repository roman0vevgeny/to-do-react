// export const formatDate = (date) => {
//   let formattedDate = ''
//   let year = date.getFullYear()
//   formattedDate += year
//   formattedDate += '.'
//   let month = date.getMonth() + 1
//   if (month < 10) {
//     month = '0' + month
//   }
//   formattedDate += month
//   formattedDate += '.'
//   let day = date.getDate()
//   if (day < 10) {
//     day = '0' + day
//   }
//   formattedDate += day
//   formattedDate += ', '
//   let hour = date.getHours()
//   if (hour < 10) {
//     hour = '0' + hour
//   }
//   formattedDate += hour
//   formattedDate += ':'
//   let minute = date.getMinutes()
//   if (minute < 10) {
//     minute = '0' + minute
//   }
//   formattedDate += minute
//   formattedDate += ':'
//   let second = date.getSeconds()
//   if (second < 10) {
//     second = '0' + second
//   }
//   formattedDate += second

//   return formattedDate
// }

export const formatDate = (date) => {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  let dateString = day + '.' + month + '.' + year
  return dateString
}
