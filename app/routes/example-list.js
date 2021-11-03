const {
  exampleListPaths,
  exampleListForks
} = require('../utils/example-list-paths')

const {
  generateRandomString
} = require('../utils/helpers')

module.exports = router => {
  router.get('/example-list/start', (req, res) => {
    const movieId = generateRandomString()
    res.redirect(`/example-list/${movieId}/title`)
  })

  router.get('/example-list/:movieId/:view', (req, res) => {
    res.locals.movieId = req.params.movieId
    res.render(`example-list/${req.params.view}`, { paths: exampleListPaths(req) })
  })

  router.post([
    '/example-list/:movieId/:view'
  ], function (req, res) {
    const fork = exampleListForks(req)
    const paths = exampleListPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
