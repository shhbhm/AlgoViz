const express = require('express');
const path = require('path');

const app = express();
app.use("/public", express.static(__dirname + "/public"));

// Handle both root and index.html paths
app.get(["/", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Handle pathfinding route
app.get("/pathfinding", (req, res) => {
    res.sendFile(path.join(__dirname, "public/pathfinding/pathfinding.html"));
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});