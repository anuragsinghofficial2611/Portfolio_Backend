const app = require('./app');
const connectDB = require('./config/db');

connectDB();

app.listen(process.env.PORT,() => {
    console.log(`server is live at port ${process.env.PORT}`);
})