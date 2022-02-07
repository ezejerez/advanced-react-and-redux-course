// Main starting point of the application
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

// App setup

// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on:", port);
