import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async createPost(text: string, photos: string[], author: string) {
    const user = await this.userRepository.findOne({ where: { user_id: author } });
    const post = this.postRepository.create({ text, photo: photos, author: user });
    return await this.postRepository.save(post);
  }

  async getPostByUserId(user_id: string) {
    return await this.postRepository.createQueryBuilder('post').leftJoinAndSelect('post.author', 'author').where('author.user_id = :user_id', { user_id }).getMany();
  }

  async getPostByPostId(post_id: string) {
    return await this.postRepository.createQueryBuilder('post').where('post.post_id = :post_id', { post_id }).getOne()
  }
}
