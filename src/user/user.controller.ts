import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { UserEntity } from './user.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@Crud({
  model: { type: UserEntity },
  params: {
    id: {
      field: 'userId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      role: {},
      workshifts: {},
      avatar: {},
    },
  },
})
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(public service: UserService) { }
}
