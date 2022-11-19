import data from './data.js'
import server from './server.js'
import render from './render.html.js'

const reduce = (name, data, meta, metafunc, pool, poolfunc) => (
  typeof data === 'object' && (
    meta = metafunc(name, data, meta, pool),
    pool = poolfunc(name, data, meta, pool),
    Object.entries(data)
    .forEach(([name, data]) =>
      typeof data === 'object' && (
        pool = reduce(name, data, meta, metafunc, pool, poolfunc)
      )
    )
  ),
  pool
)

Promise.resolve((
  console.log('Starting'),
  data
))
.then(data => reduce(
  '',
  data,
  [
    ['publication year', 'Publication years'],
    ['country of birth', 'Countries of birth'],
    ['year of birth', 'Years of birth'],
  ],
  (name, data, meta, pool) =>
    meta,
  data,
  (name, data, meta, pool) => (
    meta.map(([get, set]) =>
      data[get] && (
        pool[set] || (pool[set] = {}),
        pool[set][data[get]] || (pool[set][data[get]] = {}),
        pool[set][data[get]][name] = data
      )
    ),
    pool
  )
))
.then(data =>
  reduce(
    '',
    data['Books'],
    data['Authors'],
    (name, data, meta, pool) =>
      meta,
    data,
    (name, data, meta, pool) => (
      data['author'] && (
        meta[data['author']][name] = data
      ),
      pool
    )
  ),
  data
)
.then(data => (
  console.log(data),
  data
))
.then(data => reduce(
    '',
    data,
    '',
    (name, data, meta, pool) =>
      meta + name + '/',
    new Map,
    (name, data, meta, pool) => (
      pool.get(name) && pool ||
      pool.set(name, meta) && pool
    )
))
.then(PATHS => (
  console.log(PATHS),
  PATHS
))
.then(PATHS =>
  reduce(
    '',
    data,
    '',
    (name, data, meta, pool) =>
      meta + name + '/',
    new Map,
    (name, data, meta, pool) =>
      pool.set(meta, render(name, data, PATHS))
  )
)
.then(RENDERS =>
  server(RENDERS)
  .listen(
    {host:'127.0.0.1', port: 8000}
  )
)
.then(SERVER =>
  console.log('Started')
)
