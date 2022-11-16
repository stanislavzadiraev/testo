import css from './default.css.js'

const isPrimitive = val =>
  !(typeof val == "object" || typeof val == "function")

export default (name, data, paths) => `
<!DOCTYPE html>

<head>
    <title>My Website</title>
    <style>
      ${css()}
    </style>
</head>

<body>
    <div class="center">
        <h1><a href="/">the Lib</a></h1>
        </br>
        <div><h2>${
          paths.get(name)
          .slice(+1,-1)
          .split('/')
          .map(name =>
            `<a href="${paths.get(name)}">${name}</a>`
          )
          .join(' > ')
        }</h2></div>
        </br>
        <div>${
          Object.entries(data)
            .map(([name, data]) => [
              name, data, paths.get(name), paths.get(data)
            ])
            .map(([name, data, linkname, linkdata]) =>
              linkname && `<p><a href="${linkname}">${name}</a></p>` ||
              linkdata && `<p>${name}: <a href="${linkdata}">${data}</a></p>` ||
              `<p>${name}: ${data}</p>`
            )
            .join('')
        }</div>
    </div>
</body>

</html>
`
