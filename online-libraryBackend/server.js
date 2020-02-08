const express = require('express');
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const selectingRouter = require("./routes/selectingBook");


const app = express();

// connect the mongodb
connectDB();

app.use(express.json({extended:false}));
app.use("/",userRouter);
app.use("/",bookRouter);
app.use("/",selectingRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));