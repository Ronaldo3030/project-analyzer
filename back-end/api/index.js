const express = require('express');
const cors = require('cors');
const router = require('./routes');

const port = process.env.PORT || 3030
const app = express();
app.use(cors());
app.use(express.json());
router(app);

app.listen(port, () => {
  console.log(`Server running in: http://localhost:${port}`);
});