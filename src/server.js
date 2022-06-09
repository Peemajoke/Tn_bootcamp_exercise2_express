import express from 'express'
import bodyParser from 'body-parser'

const app = express()

const PORT = 3000

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

// route to check if connection is ok.
app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }))

app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', PORT)
})
