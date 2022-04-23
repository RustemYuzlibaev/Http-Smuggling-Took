// curl http://localhost:8000 --header "Content-Length: 100" --header "Transfer-Encoding: chunked" -v

import http from "http";

const config = {
  host: "localhost",
  port: 8000,
};

const requestListener = function (request, response) {
  if (
    request.headers["content-length"] &&
    request.headers["transfer-encoding"]
  ) {
    response.writeHead(400);
    response.end();
    return;
  }

  if (request.headers["content-length"]) {
    response.writeHead(
      400,
      "Malformed HTTP request. Please, use Transfer-Encoding header instead for safety reasons"
    );
    response.end();
    return;
  }

  // Log to console
  console.log("request.headers", request.headers);
  console.log("result.headers", response.headers);

  response.writeHead(200);
  response.end();
};

const server = http.createServer(requestListener);
server.listen(config.port, config.host, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
