import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { ProductEntity } from "src/product/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HaSanPhamEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'HinhAnhSanPhamId' })
  hinhAnhSanPhamId: string;

  @Column({ type: 'uuid', nullable: false, name: 'ProductId' })
  @ApiProperty({ description: 'ProductId' })
  productId: string

  @JoinColumn({ name: 'ProductId' })
  @ManyToOne(() => ProductEntity, product => product.hinhAnhSanPhams)
  product: ProductEntity;

  @Column({ type: 'varchar', name: "Url" })
  @IsNumber()
  @ApiProperty({ description: 'Url' })
  url: string;

  @Column({ type: 'varchar', name: "Alt" })
  @IsNumber()
  @ApiProperty({ description: 'Alt' })
  alt: string;

}
