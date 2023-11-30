const express = require("express");
const app = express();

const homeRouter = require("./routers/main.js")
const aboutRouter = require("./routers/about.js")

app.use(express.static("public"));

app.get("/about", aboutRouter);
app.use("/", homeRouter);

app.listen(3000,() =>{
    console.log("Servidor en el puerto 3000");
})

