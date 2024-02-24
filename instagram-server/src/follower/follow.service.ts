import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Follow } from './follow.entity';
import { fromDtoToEntity } from './follow.mapper';
import { Repository } from 'typeorm';

@Injectable()
export class FollowService {
  constructor(@InjectRepository(Follow) private followRepository: Repository<Follow>) {}

  async followUser(userToId: string, userFromId: string): Promise<Follow> {
    const newFollow = fromDtoToEntity(userToId, userFromId);
    return await this.followRepository.save(newFollow);
  }

  async getFollowers(userID: string): Promise<Follow[]> {
    return await this.followRepository
      .createQueryBuilder('follow')
      .where('follow.userToId = :userID', { userID })
      .getMany();
  }

  async getFollowing(userID: string): Promise<Follow[]> {
    return await this.followRepository
      .createQueryBuilder('follow')
      .where('follow.userFromId = :userID', { userID })
      .getMany();
  }

  async unfollowUser(userToId: string, userFromId: string): Promise<string> {
    try {
      const unfollow = await this.followRepository
        .createQueryBuilder()
        .delete()
        .where('userToId = :userToId AND userFromId = :userFromId', { userToId, userFromId })
        .execute();
      if (unfollow.affected === 0) {
        throw new Error('User not found');
      }
      return 'User unfollowed successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async getFollow(userToId: string, userFromId: string): Promise<Follow> {
    return await this.followRepository
      .createQueryBuilder('follow')
      .where('follow.userToId = :userToId AND follow.userFromId = :userFromId', { userToId, userFromId}).getOne()
  }
}
