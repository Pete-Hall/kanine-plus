const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const originRouter = require('./routes/origin.router');
const routeRouter = require('./routes/route.router');
const addDogRouter = require('./routes/addDog.router');
const dogRouter = require('./routes/dog.router');
const detailsRouter = require('./routes/details.router');
const editDogRouter = require('./routes/editDog.router');
const notesRouter = require('./routes/notes.router');
const addNoteRouter = require('./routes/addNote.router');
const deleteNoteRouter = require('./routes/deleteNote.router');
const deleteDogRouter = require('./routes/deleteDog.router');
const uploadImageRouter = require('./routes/uploadImage.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/origin', originRouter)
app.use('/api/route', routeRouter);
app.use('/api/add', addDogRouter);
app.use('/api/dog', dogRouter);
app.use('/api/details', detailsRouter);
app.use('/api/edit', editDogRouter);
app.use('/api/notes', notesRouter);
app.use('/api/addNote', addNoteRouter);
app.use('/api/deleteNote', deleteNoteRouter);
app.use('/api/deleteDog', deleteDogRouter);
app.use('/api/uploadImage', uploadImageRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
