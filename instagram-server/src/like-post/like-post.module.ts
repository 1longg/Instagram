import { Module} from '@nestjs/common';
import { LikePostController } from './like-post.controller';
import { LikePostService } from './like-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikePost } from './like-post.entity';
import { User } from 'src/user/user.entity';
import { Post } from 'src/post/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikePost, User, Post])],
  controllers: [LikePostController],
  providers: [LikePostService]
})
export class LikePostModule {}
