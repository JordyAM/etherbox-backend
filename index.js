const express = require('express');

const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const socketio = require('socket.io');
app.set("port", process.env.PORT || 8000);
const io = socketio(http);

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());

//When someone connects
io.on('connection', socket => {
    console.log('New connection...');
})

app.get("/", (req, res) => {
    return res,redirect("/")
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