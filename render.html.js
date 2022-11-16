import css from './default.css.js'

const isPrimitive = val =>
  !(typeof val == "object" || typeof val == "function")

export default (data, path, back) => `
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
        <div><h2>${
          path
          .slice(+1,-1)
          .split('/')
          .map((item, numb, base) =>
            `<a href="${
              '/' +
              (numb &&
              (base[numb - 1] + '/' + item) ||
              item) + '/'
            }">${item}</a>`
          )
          .join(' > ')
        }</h2></div>
        <div>${
          Object.entries(data)
            .map(([name, data]) => [
              name, data, isPrimitive(data) && back.get(data)
            ])
            .map(([name, data, link]) =>
              link && `<p><a href="${link}">${name}: ${data}</a></p>` ||
              isPrimitive(data) && `<p>${name}: ${data}</p>` ||
              `<p><a href="${path + name}/">${name}</a></p>`

            )
            .join('')
        }</div>
    </div>
</body>

</html>
`
