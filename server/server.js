require("dotenv").config();
require("./DB");
const express = require("express");
const cors = require("cors");
const usersRouter = require("./Routes/usersRouter")

const PORT = process.env.PORT || 4000 ;
const app = express();


app.use(cors());
app.use(express.json());

app.use("/users" , usersRouter); 

app.listen(PORT , () => {
    console.log(`server is up at Port : ${PORT}`);
})