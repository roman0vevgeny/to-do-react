export const isNotExpired = (expirationDate, checked) => {
  const today = new Date().toISOString().slice(0, 10)
  if (!checked) {
    return expirationDate >= today
  } else {
    return true
  }
}
