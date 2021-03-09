import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud } from '@nestjsx/crud';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
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
@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) { }
}
