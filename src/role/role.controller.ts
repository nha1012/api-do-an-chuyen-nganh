import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Crud({
  model: { type: RoleEntity },
  params: {
    id: {
      field: 'roleId',
      primary: true,
      type: 'uuid',
    },
  },
})
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@ApiTags('Role')
@Controller('role')
export class RoleController {
  constructor(public service: RoleService) { }
}
