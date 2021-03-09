import { OrderController } from './order.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity])],
    controllers: [
        OrderController,],
    providers: [OrderService],
})
export class OrderModule { }
