const express = require('express');
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const bookRouter = require("./routes/book");

connectDB();

app.use(express.json({extended:false}));
app.use(cors());

app.use("/api/user",userRouter);
app.use("/api/book",bookRouter);
app.use("/api/admin",adminRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));