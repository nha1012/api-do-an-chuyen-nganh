
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from 'src/product/product.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DmSanPhamEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'DanhMucSanPhamId' })
  danhMucSanPhamId: string;

  @Column({ name: 'DanhMucChaId', type: 'uuid', nullable: true })
  @ApiProperty({ description: 'Danh mục cha Id' })
  danhMucChaId: string;

  @JoinColumn({ name: 'DanhMucChaId' })
  @OneToMany(() => DmSanPhamEntity, dmSanPham => dmSanPham.danhMucCha)
  danhMucCha: DmSanPhamEntity;

  @Column({ name: 'TenDanhMuc', type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Tên Danh Mục' })
  tenDanhMuc: string;

  @OneToMany(() => ProductEntity, product => product.danhMucSanPham)
  products: ProductEntity[];
}
