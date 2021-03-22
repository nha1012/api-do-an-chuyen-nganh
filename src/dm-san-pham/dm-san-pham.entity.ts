
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from 'src/product/product.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DmSanPhamEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'DanhMucSanPhamId' })
  danhMucSanPhamId: string;

  @Column({ name: 'TenDanhMuc', type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Tên Danh Mục' })
  tenDanhMuc: string;

  @OneToMany(() => ProductEntity, product => product.danhMucSanPham)
  products: ProductEntity[];
}
