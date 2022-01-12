const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./database/sequelize');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get('/getArticles', async (req, res) => {
  let data = await sequelize.query(`SELECT * FROM articles`)
  res.status(200).send(data)
})

sequelize.authenticate()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));