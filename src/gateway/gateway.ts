import { Body, OnModuleInit, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket,Server } from "socket.io";
import { ChatMessage } from "./dto/Chat.message.dto";
import { WsExceptionFilter } from "./ws-exception.filter";

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
@UseFilters(new WsExceptionFilter())
export class MyGateway implements OnModuleInit{
  
    @WebSocketServer()
    server:Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            
            console.log( `New user ${socket.id} connected`);
        },); 
    }

    @SubscribeMessage('text-chat')
    @UsePipes( new ValidationPipe())
    handleMessage(@MessageBody() message:ChatMessage,
    @ConnectedSocket() client: Socket){
       
        this.server.emit('text-room', {
            ...message,
            time:new Date().toString(),
        });
      
      
    }

}