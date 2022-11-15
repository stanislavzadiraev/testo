import server from './server.js'
import data from './data.js'
import render from './render.html.js'

const routes = (
  data = {},
  root = '/',
  map = new Map
) => (
  map.set(root, render(data, root)),
  typeof data === 'object' &&
  Object.entries(data)
    .forEach(([key, val]) =>
      routes(val, root + key + '/', map)
    ),
  map
)

console.log(routes(data))

server(routes(data))
.listen(
  {host:'127.0.0.1', port: 8000}
)
