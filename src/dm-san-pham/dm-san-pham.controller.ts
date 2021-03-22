import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DmSanPhamService } from './dm-san-pham.service';
import { DmSanPhamEntity } from './dm-san-pham.entity';
@Crud({
  model: { type: DmSanPhamEntity },
  params: {
    id: {
      field: 'danhMucSanPhamId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      products: {},
      danhMucCha: {}
    },
  },
})
@ApiBearerAuth('token')
@ApiTags('Danh mục sản phẩm')
@Controller('danh-muc-san-pham')
export class DmSanPhamController {
  constructor(public service: DmSanPhamService) { }
}
