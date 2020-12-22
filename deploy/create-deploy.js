const fs = require("fs");
const path = require("path");

const rootOfRepoDir = path.dirname(__dirname);
const deployDir = path.join(rootOfRepoDir, "dist");
if (fs.existsSync(deployDir)) {
    fs.rmdirSync(deployDir);
}
fs.mkdirSync(deployDir);
fs.copyFileSync(
    path.join(rootOfRepoDir, "information-foraging", "scripts", "js", "app.js"),
    path.join(deployDir, "app.js")
);

fs.copyFileSync(
    path.join(rootOfRepoDir, "information-foraging", "css", "app.js"),
    path.join(deployDir, "app.js")
);
