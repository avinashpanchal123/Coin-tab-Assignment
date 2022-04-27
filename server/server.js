const jsonServer = require("json-server");
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router("./db.json");
const port = process.env.PORT || 2233;

server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log("listening on port 2233");
});
