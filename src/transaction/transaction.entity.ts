import { ApiProperty } from "@nestjs/swagger";
import { OrderEntity } from "src/order/order.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'TransactionId' })
  transactionId: string;

  @Column({ type: 'boolean', name: "Status", default: false })
  @ApiProperty({ description: 'Status' })
  status: boolean;

  @Column({ type: 'uuid', name: "UserId", nullable: true })
  @ApiProperty({ description: 'UserId' })
  userId: string;

  @JoinColumn({ name: 'UserId' })
  @ManyToOne(() => UserEntity, user => user.transations, { onDelete: 'SET NULL' })
  user: UserEntity

  @Column({ type: 'float', name: "TongTien", nullable: true })
  @ApiProperty({ description: 'TongTien' })
  tongTien: number;

  @Column({ type: 'varchar', name: "Payment", nullable: true })
  @ApiProperty({ description: 'Payment' })
  payment: string;

  @Column({ type: 'varchar', name: "Message", nullable: true })
  @ApiProperty({ description: 'Message' })
  message: string;

  @Column({ type: 'int', name: "Qty", nullable: true })
  @ApiProperty({ description: 'Qty' })
  qty: number;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
  @OneToMany(() => OrderEntity, order => order.transaction)
  orders: OrderEntity[]

}


export enum TypeTGBaoCao {
  TUAN = 'TUAN',
  THANG = 'THANG',
}
