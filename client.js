import { SSEClient } from "sse-client-web";

// subscribe from URL
const client = new SSEClient({
  baseURL: "localhost:8000",
});

client.onError((url, event) => {
  console.log(url, event);
});

const subscriber = client
  .subscribe("/")
  //   .on("event1", (data) => {
  //     /** your codes here */
  //   })
  //   .on("event2", (data) => {
  //     /** your codes here */
  //   })
  .on("*", (data) => {
    /** your codes here */
    console.log(data);
  });

// ...

// unsubscribe events
// subscriber.off("event1");
// subscriber.off("event2");
// or unsubscribe all events
// subscriber.offAll();
