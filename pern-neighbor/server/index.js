const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5003 || process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());

//verify servie is running
app.listen(PORT, () => {
  try {
    console.log(`app running on port ${PORT}`);
  } catch (err) {
    console.error(err.message);
  }
});
