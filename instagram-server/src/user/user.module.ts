import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "src/auth/strategy/jwt.strategy";
import { Follow } from "src/follower/follow.entity";
import { FollowModule } from "src/follower/follow.module";
import { Post } from "src/post/post.entity";
import { LikePost } from "src/like-post/like-post.entity";
import { Comment } from "src/comment/comment.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, Follow, Post, LikePost, Comment]), PassportModule, forwardRef(() => FollowModule)],
    providers: [UserService, JwtStrategy],
    exports: [UserService],
    controllers: [UserController]

})
export class UserModule{}