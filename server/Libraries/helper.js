

const getTableConfig = (currentPage, perPage) => {
  currentPage = Math.max(0, currentPage)
  let from = (parseInt(perPage) * (currentPage - 1))
  return {
    currentPage: parseInt(currentPage),
    perPage: parseInt(perPage),
    from: parseInt(from),
    to: parseInt(from) + parseInt(perPage)
  }
}

const hostName = (req) => {
  // console.log(req)
  if (!req.headers) return
  return `${req.protocol}://${req.headers.host}`
  // return `${req.headers.host}`
}
module.exports.getTableConfig = getTableConfig
module.exports.hostName = hostName