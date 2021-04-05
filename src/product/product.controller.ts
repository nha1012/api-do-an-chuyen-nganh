import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
import { EmployeeGuard } from 'src/guard/employee.guard';
import { AdminGuard } from 'src/guard/admin.guard';
@UseGuards(AdminGuard)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@Crud({
  model: { type: ProductEntity },
  params: {
    id: {
      field: 'productId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      danhMucSanPham: {},
      attributeValues: {},
      nhaCungCap: {},
      reviewSanPhams: {},
      hinhAnhSanPhams: {},
      chuongTrinhKhuyenMaiValues: {},
      orders: {},
      'reviewSanPhams.user': {},
      'attributeValues.attributes': {},
      'chuongTrinhKhuyenMaiValues.chuongTrinhKhuyenMai': {},
    },
  },
})


@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) { }
  @Get('thong-ke-sp-ton-kho')
  getThongKeSPTonKho() {
    return this.service.getThongKeSPTonKho();
  }
  @Get('thong-ke-st-ton-kho')
  getThongKeSTTonKho() {
    return this.service.getThongKeSTTonKho();
  }

}
