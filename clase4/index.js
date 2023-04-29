require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use("/", require("./routes"))


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log("aplicación corriendo en el puerto", PORT);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);

    }
}

start()