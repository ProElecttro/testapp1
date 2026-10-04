const express = require("express");

const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("Hello from TestApp1 v3 🚀");
});

app.listen(PORT, () => {
    console.log(`TestApp1 running on port ${PORT}`);
});
// Cenfra deployment test
