import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { HaSanPhamService } from './ha-san-pham.service';
import { HaSanPhamEntity } from './ha-san-pham.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@Crud({
  model: { type: HaSanPhamEntity },
  params: {
    id: {
      field: 'hinhAnhSanPhamId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      product: {},
    },
  },
})
@ApiTags('Hinh anh sản phẩm')
@Controller('Ha-san-pham')
export class HaSanPhamController {
  constructor(public service: HaSanPhamService) { }
}
