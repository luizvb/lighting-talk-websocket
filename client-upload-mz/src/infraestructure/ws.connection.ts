import io from 'socket.io-client';

class SocketIo {
  socket: any;
  constructor() {
    this.socket = null;
  }

  public connection: any = () => {
    if (!this.socket) {
      this.socket = io('localhost:3000', {
        transports: ['websocket']
      });
      this.socket.on('connect', () => console.log('Socket connected'));
      this.socket.on('disconnect', () => console.log('Socket Disconnected'));
    }
    return this.socket;
  };

  public on = (event: string, callback: Function) => {
    this.connection().on(event, callback);
  };

  public emit = (event: string, data: any) => {
    this.connection().emit(event, data);
  };

  public off = (event: string) => {
    this.connection().off(event);
  };
}

export default SocketIo;
