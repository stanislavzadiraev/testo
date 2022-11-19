import http from 'http'

export default routes =>
  http
  .createServer()
  .on(
    'request',
    (req, res) =>
      (
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}),
        res.end(routes.get(decodeURI(req.url)))
      )
  )
