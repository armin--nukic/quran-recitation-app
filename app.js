const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/reciters", (req, res) => {
  const reciters = [
    {
      name: "Abdul Basit",
      videoId: "mJ4nfpZRRPE",
    },
    {
      name: "Mishary Rashid Alafasy",
      videoId: "X2YnP50cwNU",
    },
    {
      name: "Saad Al-Ghamdi",
      videoId: "QhbORaXfUy0",
    },
  ];
  res.json(reciters);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
