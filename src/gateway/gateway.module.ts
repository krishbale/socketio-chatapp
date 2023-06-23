import { Module } from "@nestjs/common";
import { MyGateway } from "./gateway";

@Module({
    imports: [MyGateway],
    providers: [MyGateway],
    controllers: []
})
export class GatewayModule {}