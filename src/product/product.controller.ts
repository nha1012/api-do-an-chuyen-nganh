import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

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
      nhaCungCap: {},
      reviewSanPhams: {},
      hinhAnhSanPhams: {},
      chuongTrinhKhuyenMai: {},
      orders: {}
    },
  },
})
@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) { }
}
