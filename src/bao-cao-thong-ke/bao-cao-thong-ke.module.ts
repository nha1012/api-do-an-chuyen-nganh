import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/order/order.entity";
import { OrderService } from "src/order/order.service";
import { TransactionEntity } from "src/transaction/transaction.entity";
import { TransactionService } from "src/transaction/transaction.service";
import { BaoCaoThongKeController } from "./bao-cao-thong-ke.controller";


@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity, OrderEntity])],
  controllers: [BaoCaoThongKeController],
  providers: [TransactionService, OrderService]
})
export class BaoCaoThongKeModule { }
