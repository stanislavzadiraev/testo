import http from 'http'

export default routes =>
  http.createServer(
    (req, res) =>
      (
        res.setHeader("Content-Type", "text/html"),
        res.writeHead(200),
        res.end(
          routes.get(decodeURI(req.url))
        )
      ) ||
      (
        res.writeHead(400),
        res.end("Data not found")
      )
  )
