import express from 'express'
import path from 'path'

const app = express()
const port = 1339

// static files
app.use(express.static('./'))

// catch all
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join('./', 'index.html')))
})

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`)
})
