const express = require('express');
const app = express();
const bodyParser = require('body-parser');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTE CALLS ---------- **/
const projectsRouter = require('./routes/projects.router')
const tagsRouter = require('./routes/tags.router')
/** ---------- ROUTES ---------- **/
app.use('/projects', projectsRouter);
app.use('/tags', tagsRouter)
/** ---------- START SERVER ---------- **/
const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Listening on port: ', port);
});