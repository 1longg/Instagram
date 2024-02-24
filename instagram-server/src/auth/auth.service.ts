import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterService } from './register/register.service';
import { RegisterDto } from './register/dto/register.dto';
import { LoginDto } from './logIn/dto/login.dto';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { pick } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private registerService: RegisterService,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}
  async register(@Body() registerDto: RegisterDto) {
    return this.registerService.registerUser(registerDto);
  }

  async validateUser(@Body() loginDto: LoginDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: [{ email: loginDto.email }, { username: loginDto.email }]
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const checkPassword = await bcrypt.compare(loginDto.password, user.password);
    if (!checkPassword) throw new UnauthorizedException('Invalid credentials');
    return pick(user, ['user_id', 'username', 'email']);
  }
}
