import data from './data.js'
import server from './server.js'
import render from './render.html.js'

const reduce = (name, data, pool, poolfunc, meta, metafunc) => (
  typeof data === 'object' && (
    meta = metafunc(name, data, pool, meta),
    pool = poolfunc(name, data, pool, meta),
    Object.entries(data)
    .forEach(([name, data]) =>
      typeof data === 'object' && (
        pool = reduce(name, data, pool, poolfunc, meta, metafunc)
      )
    )
  ),
  pool
)

const back = reduce(
  '',
  data,
  new Map,
  (name, data, pool, meta) =>
    pool.set(name, meta),
  '',
  (name, data, pool, meta) =>
    meta + name + '/'
)

const routes = reduce(
  '',
  data,
  new Map,
  (name, data, pool, meta) =>
    pool.set(meta, render(data, meta, back)),
  '',
  (name, data, pool, meta) =>
    meta + name + '/',
)

console.log(reduce(
  '',
  data,
   0,
  (name, data, pool, meta) =>
    ++pool,
  undefined,
  (name, data, pool, meta) => (
    console.log(`'${name}'`),
    name
  )
))


server(routes)
.listen(
  {host:'127.0.0.1', port: 8000}
)
