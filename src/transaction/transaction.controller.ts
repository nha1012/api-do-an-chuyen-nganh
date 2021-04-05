import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { AdminGuard } from 'src/guard/admin.guard';

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

  @UseGuards(AdminGuard)
  @Get('thong-ke')
  getThongKe(@Query() params) {
    return this.service.getThongKe(params);
  }
}
