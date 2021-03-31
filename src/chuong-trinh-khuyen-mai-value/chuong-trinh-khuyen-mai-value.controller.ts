import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ChuongTrinhKhuyenMaiValueService } from './chuong-trinh-khuyen-mai-value.service';
import { ChuongTrinhKhuyenMaiValueEntity } from './chuong-trinh-khuyen-mai-value.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@Crud({
  model: { type: ChuongTrinhKhuyenMaiValueEntity },
  params: {
    id: {
      field: 'chuongTrinhKhuyenMaiValueId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      chuongTrinhKhuyenMai: {},
      product: {}
    },
  },
})
@ApiTags('Chương trình khuyến mãi')
@Controller('chuong-trinh-khuyen-mai-value')
export class ChuongTrinhKhuyenMaiValueController {
  constructor(public service: ChuongTrinhKhuyenMaiValueService) { }
}
