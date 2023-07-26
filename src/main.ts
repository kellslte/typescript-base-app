import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import config from './config/main.config';
import router from './routes';
import morgan from 'morgan';
import routeList from 'express-list-routes';

const app = express();
const routehandler = express.Router();
app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

const server = http.createServer(app);

config.connectToDatabase();

server.listen(config.server.port, () => console.log(`Application server listening on http://localhost:${config.server.port}`));

app.use('/api/v1', router(routehandler));

routeList(app);