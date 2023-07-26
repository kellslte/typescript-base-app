import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const config = {
    server: {
        port: parseInt(process.env.PORT) 
    },
    auth: {
        secret: process.env.APP_SECRET
    },
    connectToDatabase: function () {
        mongoose.Promise = Promise;

        mongoose.connect(process.env.MONGODB_URL);

        mongoose.connection.on('error', (error: Error) => console.error(error));

        console.log('Database connection successful');
    }
};

export default config;