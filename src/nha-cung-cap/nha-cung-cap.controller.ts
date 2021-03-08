import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { NhaCungCapEntity } from './nha-cung-cap.entity';
import { NhaCungCapService } from './nha-cung-cap.service';
@UseGuards(JwtAuthGuard)
@Crud({
  model: { type: NhaCungCapEntity },
  params: {
    id: {
      field: 'nhaCungCapId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      products: {},
    },
  },
})
@ApiBearerAuth('token')
@ApiTags('Nhà cung cấp')
@Controller('nha-cung-cap')
export class NhaCungCapController {
  constructor(public service: NhaCungCapService) { }
}
