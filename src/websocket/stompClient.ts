import { Client, type IMessage } from "@stomp/stompjs";

import { config } from "../config";

export function createStompClient() {
  return new Client({
    brokerURL: config.webSocketUrl,
    reconnectDelay: 5_000,
  });
}

export function readStompMessage<T>(message: IMessage) {
  return JSON.parse(message.body) as T;
}
