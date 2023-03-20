const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body.version)
  console.log('yep')
  if (req.body.debug) {
    exec(req.body.debug, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
       // the *entire* stdout and stderr (buffered)
       console.log(`${stdout}`);
      }
    });
  }
})

app.options('/', (req, res) => {
  console.log('options')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
