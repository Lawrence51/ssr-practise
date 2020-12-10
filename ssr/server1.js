const Vue = require('vue');
const server = require('express')();

server.get('/', (req, res) => {
  const app = new Vue({
    template: `<div>当前页面路由${req.url}</div>`
  })

  const renderer = require('vue-server-renderer').createRenderer();

  renderer.renderToString(app).then(html => {
    console.log(html);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
  }).catch(err => {
    console.log(err)
  })
})

server.listen(3000)

