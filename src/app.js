const express = require('express');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.find(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.put('/users/:id', async (req, res) => {
  const user = await User.update(req.params.id, req.body);
  res.json(user);
});

app.delete('/users/:id', async (req, res) => {
  await User.delete(req.params.id);
  res.status(204).send();
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
