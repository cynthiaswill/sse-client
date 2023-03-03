var EventSource = require("eventsource");

const eventSource = new EventSource("http://localhost:8000");

function updateMessage(message) {
  console.log(message);
}

eventSource.onmessage = function (event) {
  console.dir(event);
};

eventSource.onerror = function () {
  updateMessage("Server closed connection");
  eventSource.close();
};
