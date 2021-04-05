import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ChuongTrinhKhuyenMaiService } from './chuong-trinh-khuyen-mai.service';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.entity';
import { AdminGuard } from 'src/guard/admin.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@Crud({
  model: { type: ChuongTrinhKhuyenMaiEntity },
  params: {
    id: {
      field: 'chuongTrinhKhuyenMaiId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      chuongTrinhKhuyenMaiValues: {},
    },
  },
})
@ApiTags('Chương trình khuyến mãi')
@Controller('chuong-trinh-khuyen-mai')
export class ChuongTrinhKhuyenMaiController {
  constructor(public service: ChuongTrinhKhuyenMaiService) { }

  @UseGuards(AdminGuard)
  @Get('thong-ke')
  getThongKe(@Query() params) {
    return this.service.getThongKe(params);
  }
}
