import express from 'express';
import axios from 'axios';

const app = express();

const services = {
  addressService: 'http://localhost:3001/health',
  bookingService: 'http://localhost:3002/health',
  chatService: 'http://localhost:3003/health',
  feedbackService: 'http://localhost:3004/health',
  notificationService: 'http://localhost:3005/health',
  paymentService: 'http://localhost:3006/health',
  roomService: 'http://localhost:3007/health',
  userService: 'http://localhost:3008/health',
};

app.get('/health', async (req, res) => {
  const results = {};
  const timeout = 2000; // 2 seconds timeout

  await Promise.all(
    Object.entries(services).map(async ([name, url]) => {
      try {
        const response = await axios.get(url, { timeout });
        results[name] = response.data;
      } catch (error) {
        results[name] = {
          status: 'DOWN',
          error: error.message,
        };
      }
    })
  );

  // Determine overall status
  const allUp = Object.values(results).every(
    (service) => service.status && service.status.toUpperCase() === 'UP'
  );

  res.json({
    status: allUp ? 'UP' : 'DEGRADED',
    timestamp: new Date().toISOString(),
    services: results,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Health aggregator running on port ${PORT}`));
