import css from './default.css.js'

const isPrimitive = val =>
  !(typeof val == "object" || typeof val == "function")

export default (data, path) => `
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
        <h2>${
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
        }</h2>
        ${
          Object.entries(data)
            .map(([meta, data]) =>
              isPrimitive(data) &&
              `<p>${meta}: ${data}</p>` ||
              `<p><a href="${path + meta + '/'}">${meta}</a></p>`
            )
            .join('')
        }
    </div>
</body>

</html>
`
