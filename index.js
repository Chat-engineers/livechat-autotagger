import { client as lc } from "./livechat-client.js";
import { client as mqtt } from "./mqtt.js";

const {
  LC_CLIENTID,
} = process.env;

const start = async () => {
  mqtt.on("connect", () => {
    mqtt.subscribe(`${LC_CLIENTID}/chat_deactivated`);
    console.log("Listening for LiveChat events...");
  });

  mqtt.on("error", (error) => {
    console.error('Error: ', error.message);
  });

  mqtt.on("message", async (_topic, message) => {
    const { payload } = JSON.parse(message.toString());

    await lc.post("agent/action/tag_thread", {
      chat_id: payload.chat_id,
      thread_id: payload.thread_id,
      tag: "needs_review",
    });

    console.log(`tagged thread: ${payload.chat_id}-${payload.thread_id}`);
  });
};

start();
