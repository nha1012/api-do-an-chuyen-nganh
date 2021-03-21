import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { ReviewSanPhamService } from './review-san-pham.service';
import { ReviewSanPhamEntity } from './review-san-pham.entity';

@Crud({
  model: { type: ReviewSanPhamEntity },
  params: {
    id: {
      field: 'reviewSanPhamId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      product: {},
      user: {}
    },
  },
})
@ApiTags('Review sản phẩm')
@Controller('review-san-pham')
export class ReviewSanPhamController {
  constructor(public service: ReviewSanPhamService) { }
}
