const { Server } = require("socket.io");
var http = require("http");
var createError = require("http-errors");
const cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


var indexRouter = require("./routes/index");
const createConnectedUser = require("./functions/createConnectedUSer");
const handleUpdateStatus = require("./functions/handleUpdateStatus");

var app = express();
var server = http.createServer(app);

var port = 5000

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", async (socket) => {

  const { userId } = socket.handshake.auth

  if (userId) {
    socket.userId = userId
    socket.join(userId)
  }

  socket.on("message", async (data) => {

    await createConnectedUser({ data: data })

    socket.to(data.to).emit("messageTo", { data: data });

  });

  socket.on("updateStatus", async (data) => {

    await handleUpdateStatus({ data: data })

    socket.broadcast.emit("getStatus", data);
  });

});


server.listen(port);

module.exports = app;
