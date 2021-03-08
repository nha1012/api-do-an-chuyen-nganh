
import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from 'src/product/product.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NhaCungCapEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'NhaCungCapId' })
  nhaCungCapId: string;

  @Column({ name: 'TenNhaCungCap', type: 'varchar', nullable: true })
  @ApiProperty({ description: 'Tên Nhà Cung Cấp' })
  tenNhaCungCap: string;

  @Column({ name: 'Url', type: 'varchar', nullable: true })
  @ApiProperty({ description: 'Đường dẫn' })
  url: string;

  @Column({ name: 'PhoneNumber', type: 'varchar', nullable: true })
  @ApiProperty({ description: 'Số điện thoại' })
  phoneNumber: string;

  @Column({ name: 'Address', type: 'varchar', nullable: true })
  @ApiProperty({ description: 'Địa Chỉ' })
  address: string;


  @OneToMany(() => ProductEntity, product => product.nhaCungCap)
  products: ProductEntity[];
}
