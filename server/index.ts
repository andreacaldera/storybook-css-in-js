const express = require("express");

const app = express();
const port = 8001;

app.listen(port, () => {
  console.log(`Storybook static server is running on port ${port}.`);
});

app.use(express.static("storybook-static"));
