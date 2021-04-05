import { Body, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { AdminGuard } from 'src/guard/admin.guard';

@Crud({
  model: { type: OrderEntity },
  params: {
    id: {
      field: 'orderId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      product: {},
      transaction: {}
    },
  },
})
@UseGuards(JwtAuthGuard)
@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) { }
  @UseGuards(AdminGuard)
  @Get('bc-theo-nha-cung-cap')
  getBaoCaoNhaCungCap() {
    return this.service.getBaoCaoNhaCungCap();
  }

  @UseGuards(AdminGuard)
  @Get('bc-theo-ngay')
  getBaoCaoTheoNgay(@Query() params) {
    return this.service.getBaoCaoTheoNgay(params);
  }
}
