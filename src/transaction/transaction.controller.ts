import { Body, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Crud, CrudRequestInterceptor, ParsedRequest } from '@nestjsx/crud';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';

@Crud({
  model: { type: TransactionEntity },
  params: {
    id: {
      field: 'transactionId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      user: {},
      orders: {}
    },
  }
})
@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(public service: TransactionService) { }
  @Get('thong-ke')
  @UseInterceptors(new CrudRequestInterceptor())
  getThongKe(@Request() @ParsedRequest() req) {
    return this.service.getThongKe(req);
  }
}
