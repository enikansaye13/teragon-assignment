const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 4004;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const routes = require("./routes/todoRoutes");

routes(app)


app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
