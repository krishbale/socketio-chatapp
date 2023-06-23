//class to handle all the exceptions on webscoket
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';


@Catch()
export class WsExceptionFilter implements ExceptionFilter {
    catch(exception: WsException, host: ArgumentsHost) {
        const socket = host.switchToWs().getClient();
        socket.emit('exception', {
            status: 'error',
            message: 'Ws message is invalid'


        });
     
    }

}