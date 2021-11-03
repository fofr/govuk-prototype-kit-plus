const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function exampleListPaths (req) {
  const movieId = req.params.movieId
  const paths = [
    '/example-list',
    `/example-list/${movieId}/title`,
    `/example-list/${movieId}/year`,
    `/example-list/${movieId}/rating`,
    '/example-list'
  ]

  return nextAndBackPaths(paths, req)
}

function exampleListForks (req) {
  var forks = []
  return nextForkPath(forks, req)
}

module.exports = {
  exampleListPaths,
  exampleListForks
}
