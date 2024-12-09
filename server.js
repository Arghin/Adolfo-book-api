const express = require("express");
const booksRoute = require("./routes/booksRoute");
const PORT=process.env.PORT || 3000;

const app = express();

app.use("/",booksRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});