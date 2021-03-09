import { Controller, Request, Post, UseGuards, HttpCode, Body } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/guard/admin.guard';
import { UserEntity } from 'src/user/user.entity';
import { hash } from 'src/utils/auth.util';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // Chức năng đăng nhập
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({ status: 200 })
  @HttpCode(200)
  @ApiBody({ type: UserEntity })

  async login(@Request() req) {
    return req.user;
  }

  // Chức năng đăng ký
  @Post('register')
  @ApiOkResponse({ status: 200 })
  @HttpCode(200)
  @ApiBody({ type: UserEntity })
  async register(@Body() user: UserEntity) {
    user.password = hash(user.password)
    return this.authService.register(user);
  }
}
