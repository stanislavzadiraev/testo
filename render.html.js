import css from './default.css.js'

const sitename = 'the Lib'

export default (name, data, paths) => `
<!DOCTYPE html>

<head>
    <title>${sitename}</title>
    <style>
      ${css()}
    </style>
</head>

<body>
    <div class="center">
        <div>
          <h1><a href="/">${sitename}</a></h1>
        </div>
        <div><h2>${
          paths
          .get(name)
          .slice(+1,-1)
          .split('/')
          .map(name =>
            `<a href="${paths.get(name)}">${name ||'all we dot'}</a>`
          )
          .join(' > ')
        }</h2></div>
        <div>${
          Object.entries(data)
            .map(([name, data]) => [
              name, data, paths.get(name), paths.get(data)
            ])
            .map(([name, data, pathname, pathdata]) =>
              pathname && `<p><a href="${pathname}">${name}</a></p>` ||
              pathdata && `<p>${name}: <a href="${pathdata}">${data}</a></p>` ||
              `<p>${name}: ${data}</p>`
            )
            .join('') ||
            '<p>no data</p>'
        }</div>
    </div>
</body>

</html>
`
