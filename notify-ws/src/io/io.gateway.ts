import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WsResponse, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { IoService } from './io.service';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: {
  origin: '*',
  methods: ['GET', 'POST']
} })
export class IoGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly ioService: IoService) { }

  @SubscribeMessage('processing')
  handleEvent(@MessageBody() data: string)  {
    this.server.emit('processComplete', {
      date: new Date().toLocaleString()
    })
  }

  handleConnection(client: Socket) {
    console.log(`CLIENT CONNECTED ${client.id}`);
    const clients = this.server.engine.clientsCount
    this.server.emit('acessos', {
      clients,
      date: new Date().toLocaleString()
    })
  }

  handleDisconnect(client: Socket) {
    console.log(`CLIENT DISCONNECTED ${client.id}`);
    const clients = this.server.engine.clientsCount
    this.server.emit('acessos', {
      clients,
      date: new Date().toLocaleString()
    })
  }
}
