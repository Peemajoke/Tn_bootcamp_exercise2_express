import express from 'express'

const app = express()

const PORT = 3000

// route to check if connection is ok.
app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }))

app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', PORT)
})
