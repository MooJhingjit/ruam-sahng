const getTableConfig = (currentPage, perPage) => {
  currentPage = Math.max(0, currentPage)
  let from = (parseInt(perPage) * (currentPage - 1))
  return {
    currentPage: parseInt(currentPage),
    perPage: parseInt(perPage),
    from: parseInt(from)
    // to
  }
}

module.exports.getTableConfig = getTableConfig