import { IsNotEmpty,IsString } from "class-validator";

export class ChatMessage {

    @IsString()
    to:string;

    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    message: string;
}