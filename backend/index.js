const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000
const cors = require('cors')

const app = express()
app.use(cors())

connectDB()


app.use(express.urlencoded({ extended: false }));

// route for user login/logout/create/update
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))