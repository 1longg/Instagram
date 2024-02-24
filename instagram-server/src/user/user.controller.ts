import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(@Request() req) {
    return await this.userService.getAllUsers();
  }

  @Delete('/profile')
  async getUser() {
    return await this.userService.deleteUser('long1', 'long1@gmail.com');
  }
}
