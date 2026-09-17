type MessageListener<TMessage> = (message: TMessage) => void;
type StatusListener = (status: WebSocketStatus) => void;

export type WebSocketStatus =
  | "idle"
  | "connecting"
  | "open"
  | "closed"
  | "error";

export class WebSocketClient<TIncoming, TOutgoing = never> {
  private readonly url: string;
  private socket: WebSocket | null = null;
  private readonly messageListeners = new Set<MessageListener<TIncoming>>();
  private readonly statusListeners = new Set<StatusListener>();

  constructor(url: string) {
    this.url = url;
  }

  connect() {
    if (this.socket?.readyState === WebSocket.OPEN) return;

    this.emitStatus("connecting");
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener("open", () => this.emitStatus("open"));
    this.socket.addEventListener("close", () => this.emitStatus("closed"));
    this.socket.addEventListener("error", () => this.emitStatus("error"));
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data)) as TIncoming;
      this.messageListeners.forEach((listener) => listener(message));
    });
  }

  disconnect() {
    this.socket?.close();
    this.socket = null;
    this.emitStatus("closed");
  }

  send(message: TOutgoing) {
    if (this.socket?.readyState !== WebSocket.OPEN) {
      throw new Error("Cannot send while the WebSocket is not open.");
    }

    this.socket.send(JSON.stringify(message));
  }

  onMessage(listener: MessageListener<TIncoming>) {
    this.messageListeners.add(listener);
    return () => this.messageListeners.delete(listener);
  }

  onStatusChange(listener: StatusListener) {
    this.statusListeners.add(listener);
    return () => this.statusListeners.delete(listener);
  }

  private emitStatus(status: WebSocketStatus) {
    this.statusListeners.forEach((listener) => listener(status));
  }
}
