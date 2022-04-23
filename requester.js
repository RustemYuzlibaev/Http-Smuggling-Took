import http from "http";

const options = {
  hostname: "localhost",
  port: 8000,

  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": 100,
    // "Transfer-Encoding": "compress",
  },
};

const req = http.request(options, (response) => {
  console.log(`statusCode: ${response.statusCode}`);

  console.log(`Backend response: ${response.statusMessage}`);

  response.on("data", (data) => {
    process.stdout.write(data);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
