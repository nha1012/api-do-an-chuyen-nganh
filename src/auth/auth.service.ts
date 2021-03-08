import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/user.entity';
import { compareSync } from 'bcrypt';
import { CrudRequestInterceptor } from '@nestjsx/crud';
import { InsertResult } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username: username });
    if (user &&
      compareSync(password, user.password)) {
      return this.login(user);
    }
    return null;
  }
  async login(user: UserEntity) {
    // tslint:disable-next-line:max-line-length
    const payload = { username: user.username, userId: user.userId, displayName: user.displayName, roleId: user.roleId };
    return {
      userId: user.userId,
      username: user.username,
      displayName: user.displayName,
      roleId: user.roleId,
      accessToken: this.jwtService.sign(payload),
    };
  }
  async register(newUser: UserEntity): Promise<UserEntity> {
    const { username } = newUser;
    const user = await this.usersService.findOne({ username: username });
    if (user) {
      throw new UnauthorizedException('Tên đăng nhập đã được sửa dụng');
    }
    return await this.usersService.register(newUser);
  }
}
