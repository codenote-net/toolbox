import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/clickjacking-checker/:slug', async (c) => {
  const domain = c.req.param('slug');

  const res = await fetch(`https://${domain}`)
  const xFrameOptions = res.headers.get('x-frame-options');

  return c.json({
    'X-Frame-Options': xFrameOptions
  })
})

export default app
