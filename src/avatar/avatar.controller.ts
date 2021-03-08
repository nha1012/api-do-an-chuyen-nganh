import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AvatarService } from './avatar.service';
import { AvatarEntity } from './avatar.entity';

@Crud({
  model: { type: AvatarEntity },
  params: {
    id: {
      field: 'avatarId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      user: {

      },
    },
  },
})
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@ApiTags('Avatar')
@Controller('avatar')
export class AvatarController {
  constructor(public service: AvatarService) { }
}
