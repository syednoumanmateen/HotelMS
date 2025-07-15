import express from 'express';
const app = express();
import healthRoute from './routes/health.route';

app.use('/', healthRoute);

const PORT = process.env.PORT_ROOM || 3003;
app.listen(PORT, () => console.log(`chatService running on port ${PORT}`));
