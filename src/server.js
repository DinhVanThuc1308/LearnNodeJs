require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME || 'localhost';


//config template engine
configViewEngine(app);
// khai báo router
app.use('/', webRouter)



app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})