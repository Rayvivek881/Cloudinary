const express = require("express");
const app = express(), port = 5000;
const fileRouter = require('./getFileUrl.js')
const cors = require('cors')


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', fileRouter);

app.listen(port, () => console.log("app runnng on 5000"));