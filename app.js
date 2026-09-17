const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from CodeDeploy - Day 7 CI/CD Pipeline</h1>');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
