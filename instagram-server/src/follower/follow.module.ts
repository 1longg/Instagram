import { Module, forwardRef } from "@nestjs/common";
import { FollowController } from "./follow.controller";
import { FollowService } from "./follow.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Follow } from "./follow.entity";
import { UserModule } from "src/user/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Follow]), forwardRef(() => UserModule)],
    controllers: [FollowController],
    providers: [FollowService]
})
export class FollowModule {}