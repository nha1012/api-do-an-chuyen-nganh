import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ChuongTrinhKhuyenMaiService } from './chuong-trinh-khuyen-mai.service';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.entity';

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
}
