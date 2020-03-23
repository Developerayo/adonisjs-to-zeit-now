'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
      <title>Deploying an AdonisJS app to ZEIT now</title>
    </head>
    <body>
      <section>
        <div class="logo"></div>
        <div class="title"></div>
        <div class="subtitle">
          <p>▲ Adonis is an MVC framework for Node.js it's simplicity in deployment will make you feel confident about your code</p>
          <p>
            Deploying your AdonisJS app to ZEIT now by <a href="https://twitter.com/developerayo">@developerayo</a>
          </p>    
      </div>
      </section>
    </body>
  </html>
  `
})
