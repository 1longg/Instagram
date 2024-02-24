import { Body, ClassSerializerInterceptor, Controller, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { RegisterDto } from './register/dto/register.dto';
import { AuthService } from './auth.service';
import { TokenService } from 'src/token/token.service';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private tokenService: TokenService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const accessToken = await this.tokenService.generateAccessToken(req.user);
    const refreshToken = await this.tokenService.generateRefreshToken(req.user);
    return { accessToken, refreshToken };
  }
}
