import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EmployeeGuard } from 'src/guard/employee.guard';
@UseGuards(EmployeeGuard)
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

@Controller('transaction')
export class TransactionController {
  constructor(public service: TransactionService) { }

  @Get('thong-ke')
  getThongKe(@Query() params) {
    return this.service.getThongKe(params);
  }
}
