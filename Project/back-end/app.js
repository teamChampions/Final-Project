"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var connection_to_db_1 = __importDefault(require("./connection-to-db"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_route_1 = __importDefault(require("./Routes/users-route"));
var posts_route_1 = __importDefault(require("./Routes/posts-route"));
var comments_route_1 = __importDefault(require("./Routes/comments-route"));
var likes_route_1 = __importDefault(require("./Routes/likes-route"));
dotenv_1.default.config();
var startServer = function () {
    var app = express_1.default();
    app.use(express_1.default.json());
    app.use(cors_1.default());
    connection_to_db_1.default()
        .then(function () {
        console.log("Connected to database");
        app.on("error", function (err) {
            console.log("Error Connecting to http://localhost:" + process.env.PORT);
            console.log(err.message);
        });
        app.listen(process.env.PORT, function () {
            console.log("Server Running at http://localhost:" + process.env.PORT);
        });
    })
        .catch(function (err) {
        console.log(err);
    });
    app.use("/api/users", users_route_1.default);
    app.use("/api/posts", posts_route_1.default);
    app.use("/api/comments", comments_route_1.default);
    app.use("/api/likes", likes_route_1.default);
    app.use("/uploads", express_1.default.static(__dirname + "/uploads"));
};
startServer();
