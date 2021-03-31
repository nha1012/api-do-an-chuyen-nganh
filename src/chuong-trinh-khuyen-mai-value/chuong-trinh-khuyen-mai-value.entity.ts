
import { ApiProperty } from "@nestjs/swagger";
import { ChuongTrinhKhuyenMaiEntity } from "src/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.entity";
import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChuongTrinhKhuyenMaiValueEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ChuongTrinhKhuyenMaiValueId' })
  chuongTrinhKhuyenMaiValueId: string;

  @Column({ type: 'uuid', name: "ChuongTrinhKhuyenMaiId" })
  @ApiProperty({ description: 'ChuongTrinhKhuyenMaiId' })
  chuongTrinhKhuyenMaiId: string;

  @JoinColumn({ name: 'ChuongTrinhKhuyenMaiId' })
  @ManyToOne(() => ChuongTrinhKhuyenMaiEntity, ctkm => ctkm.chuongTrinhKhuyenMaiValues)
  chuongTrinhKhuyenMai: ChuongTrinhKhuyenMaiEntity;

  @Column({ type: 'uuid', name: "ProductId" })
  @ApiProperty({ description: 'ProductId' })
  productId: string;

  @JoinColumn({ name: 'ProductId' })
  @ManyToOne(() => ProductEntity, product => product.chuongTrinhKhuyenMaiValues)
  product: ProductEntity;


}
