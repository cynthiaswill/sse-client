var EventSource = require("eventsource");

const eventSource = new EventSource("http://localhost:8000");

eventSource.onmessage = function (event) {
  console.dir(event);
};

eventSource.onerror = function () {
  const eventSource = new EventSource("http://localhost:8000");
  console.log("Server closed connection");
  eventSource.close();
};
