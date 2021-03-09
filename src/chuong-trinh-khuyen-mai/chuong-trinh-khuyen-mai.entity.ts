import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChuongTrinhKhuyenMaiEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ChuongTrinhKhuyenMaiId' })
  chuongTrinhKhuyenMaiId: string;

  @Column({ type: 'date', name: "StartDate" })
  @IsNumber()
  @ApiProperty({ description: 'StartDate' })
  startDate: Date;

  @Column({ type: 'date', name: "EndDate" })
  @ApiProperty({ description: 'EndDate' })
  endDate: Date;


  @Column({ type: 'int', name: "PhanTramGiamGia" })
  @ApiProperty({ description: 'Phần trăm giảm giá' })
  phamTramGiamGia: number;

  @OneToMany(() => ProductEntity, product => product.chuongTrinhKhuyenMai)
  products: ProductEntity[]
}
