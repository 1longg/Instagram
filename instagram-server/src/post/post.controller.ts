import { Body, Controller, Get, Param, Post, Request, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { PostService } from './post.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { S3 } from 'aws-sdk';

@Controller('post')
export class PostController {
  constructor(
    private postService: PostService,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  async createPost(
    @Request() req,
    @Body() { text, resultUpload }: { text: string; resultUpload: Array<S3.ManagedUpload.SendData> }
  ) {
    const photos = (resultUpload as Array<S3.ManagedUpload.SendData>).map((file) => file.Location);
    return await this.postService.createPost(text, photos, req.user.user_id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getPostByUserId(@Request() req) {
    return await this.postService.getPostByUserId(req.user.user_id);
  }

  @Get(':post_id')
  @UseGuards(JwtAuthGuard)
  async getPostByPostId(@Param('post_id') post_id: string) {
    return await this.postService.getPostByPostId(post_id);
  }
}
