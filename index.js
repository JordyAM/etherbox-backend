const express = require('express');

const cors = require('cors');
const app = express();
const http = require('http').Server(app);


app.set("port", process.env.PORT || 8000);
const io = require('socket.io')(http, {cors: {origin: '*'}})

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());

io.on('connection', socket => {

    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    });
})


const boxController = require('./controllers/boxController');
app.use('/boxes', boxController);

const userController = require('./controllers/userController');
app.use('/users', userController);

const commentController = require('./controllers/commentController');
app.use('/comments', commentController)

http.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});