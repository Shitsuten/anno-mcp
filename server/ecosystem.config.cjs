module.exports = {
  apps: [{
    name: "anno",
    script: "server.mjs",
    interpreter: "node",
    env: { NODE_ENV: "production" }
  }]
};
