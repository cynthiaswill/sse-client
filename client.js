var EventSource = require("eventsource");

const eventSource = new EventSource("http://localhost:8000");

eventSource.onmessage = function (event) {
  console.dir(event);
  console.log("...  ** Storing new event into DB ** ... \n");

  // all code to do with event or event.data ...
  // save to SQL db...
};

eventSource.onerror = function reConnectToServer() {
  const eventSource = new EventSource("http://localhost:8000");
  console.log("Error - connection closed! trying to reconnect ...");

  eventSource.close();
};
