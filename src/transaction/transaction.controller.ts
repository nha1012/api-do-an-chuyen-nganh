import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { AdminGuard } from 'src/guard/admin.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@UseGuards(AdminGuard)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
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
