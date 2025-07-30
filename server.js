const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('✅ الخادم يعمل بنجاح!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});