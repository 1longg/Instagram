import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async deleteUser(username: string, email: string): Promise<void> {
    await this.userRepository
      .createQueryBuilder()
      .delete()
      .where('username = :username AND email = :email', { username, email }).execute();
  }
}
