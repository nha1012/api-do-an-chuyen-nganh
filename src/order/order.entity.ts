import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { ProductEntity } from "src/product/product.entity";
import { TransactionEntity } from "src/transaction/transaction.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'OrderId' })
  orderId: string;

  @Column({ type: 'uuid', name: "ProductId" })
  @ApiProperty({ description: 'ProductId' })
  productId: string;

  @JoinColumn({ name: 'ProductId' })
  @ManyToOne(() => ProductEntity, product => product.orders, { onDelete: 'CASCADE' })
  product: ProductEntity;

  @Column({ type: 'uuid', name: "TransactionId", nullable: true })
  @ApiProperty({ description: 'TransactionId' })
  transactionId: string;

  @JoinColumn({ name: 'TransactionId' })
  @ManyToOne(() => TransactionEntity, transaction => transaction.orders)
  transaction: TransactionEntity;

  @Column({ type: 'boolean', name: "Status", default: false })
  @ApiProperty({ description: 'Status' })
  status: boolean;

  @Column({ type: 'int', name: "Qty" })
  @ApiProperty({ description: 'Qty' })
  qty: number;

  @Column({ type: 'float', name: "TongTien", default: 0, nullable: true })
  @ApiProperty({ description: 'TongTien' })
  tongTien: number;

  @CreateDateColumn()
  createDate: Date

  @UpdateDateColumn()
  updateDateColumn: Date
}
