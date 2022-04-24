const express = require("express");
const router = express.Router();
const path = require("path");
const http = require("http");
const ejs = require("ejs");

let demo = express();

router.get("/", ( req, res, next ) => {
    res.render(path.join(process.cwd(), "demo/views", "index.ejs"));
});

demo.use(express.static(path.join(process.cwd(), "demo")));
demo.use(express.static(path.join(process.cwd(), "dist")));
demo.use(express.static(path.join(process.cwd(), "lib")));


demo.use(router);

let httpServer = http.createServer(demo);

httpServer.listen(process.env.PORT || 8080, () => {
    console.log("UP AND RUNNING :) :) :)")
})