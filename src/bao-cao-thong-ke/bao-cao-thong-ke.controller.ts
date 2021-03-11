import { Controller, Get, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CrudRequestInterceptor, ParsedRequest } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderService } from 'src/order/order.service';
import { TransactionService } from 'src/transaction/transaction.service';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('token')
@ApiTags('Báo cáo thống kê')
@Controller('bao-cao-thong-ke')
export class BaoCaoThongKeController {
  constructor(private transactionService: TransactionService, private orderService: OrderService) { }

  @Get()
  @UseInterceptors(new CrudRequestInterceptor())

  // async baoCaoThongKe(@Body() params) {
  //   console.log(params);

  //   const transactions = await this.transactionService.get(params);
  //   console.log(transactions);

  // const orders = await this.orderService.getBaoBaoThongKe(req);
  // return { transactions: transactions, orders: orders };
  // }
  async baoCaoThongKe(@Request() @ParsedRequest() req) {
    console.log(req);

    return this.transactionService.get(req);
  }
}
