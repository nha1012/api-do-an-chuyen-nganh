import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { ProductEntity } from "src/product/product.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReviewSanPhamEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ReviewSanPhamId' })
  reviewSanPhamId: string;

  @Column({ type: 'uuid', nullable: false, name: 'ProductId' })
  @ApiProperty({ description: 'ProductId' })
  productId: string

  @JoinColumn({ name: 'ProductId' })
  @ManyToOne(() => ProductEntity, product => product.reviewSanPhams, { onDelete: 'CASCADE' })
  product: ProductEntity;

  @Column({ type: 'uuid', nullable: false, name: 'UserId' })
  @ApiProperty({ description: 'UserId' })
  userId: string

  @JoinColumn({ name: 'UserId' })
  @ManyToOne(() => UserEntity, user => user.reviewSanPhams, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column({ type: 'int', name: "SoSao" })
  @IsNumber()
  @ApiProperty({ description: 'SoSao' })
  soSao: number;

  @Column({ type: 'varchar', name: "DanhGia" })
  @ApiProperty({ description: 'DanhGia' })
  danhGia: string;

}
