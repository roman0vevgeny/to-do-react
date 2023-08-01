export const isNotExpired = (expirationDate) => {
  const today = new Date().toISOString().slice(0, 10)
  return expirationDate >= today
}
