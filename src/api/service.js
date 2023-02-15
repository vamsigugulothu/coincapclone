import { WSS_URL } from "./constants";

class WebSocketService {

  constructor(URL) {
    this.BASE_URL = URL;
    this.WS = null;
  }

    onMessage = (func) => {
    if (this.WS) {
      this.WS.onmessage = func;
    }
  }

  onError = (func ) => {
    if (this.WS) {
      this.WS.onerror = func;
    }
  }

  onOpen = (func) => {
    if (this.WS) {
      this.WS.onopen = func;
    }
  }

  onClose = (func) => {
    if (this.WS) {
      this.WS.onclose = func;
    }
  }

  openConnection = (url) => {
    this.WS = new WebSocket(url || this.BASE_URL);
  }

  closeConnection = () => {
    this.WS?.close();
    this.WS = null;
  };
}

const WssApi = new WebSocketService(WSS_URL);

export { WssApi, WebSocketService };
