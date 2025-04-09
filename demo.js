import express from 'express';

const app = express();

// Add your routes
app.get('/health', (req, res) => {
  res.send('OK');
});

export default app;
