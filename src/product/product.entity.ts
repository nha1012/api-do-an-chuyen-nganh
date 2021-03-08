import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { DmSanPhamEntity } from 'src/dm-san-pham/dm-san-pham.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'ProductId',
  })
  productId: string;

  @ApiProperty({ description: 'Tên sản phẩm', required: true })
  @Column({ length: 100, type: 'varchar', name: 'TenSanPham', nullable: false })
  tenSanPham: string;


  @ApiProperty({ description: 'Giá Sản Phẩm', required: true })
  @IsNotEmpty()
  @Column({ type: 'float', name: 'GiaSanPham', nullable: false })
  giaSanPham: number;

  @ApiProperty({ description: 'Giá Khuyến Mãi' })
  @IsNotEmpty()
  @Column({ type: 'float', name: 'GiaKhuyenMai', nullable: true })
  giaKhuyenMai: number;

  @ApiProperty({ description: 'Mô tả' })
  @IsString()
  @Column({ length: 255, type: 'varchar', name: 'MoTa', nullable: true })
  moTa: string;

  @ApiProperty({ description: 'Số Lượng' })
  @IsNotEmpty()
  @Column({ type: 'int', name: 'SoLuong', nullable: true })
  soLuong: number;

  @ApiProperty({ description: 'Danh mục sản phẩm Id' })
  @Column({ type: 'uuid', name: 'DanhMucSanPhamId', nullable: true })
  danhMucSanPhamId: string;

  @JoinColumn({ name: 'DanhMucSanPhamId' })
  @ManyToOne(() => DmSanPhamEntity, dmSanPham => dmSanPham.danhMucSanPhamId)
  danhMucSanPham: DmSanPhamEntity;

  @CreateDateColumn({ name: 'CreateDate' })
  createDate: Date;

  @UpdateDateColumn({ name: 'UpdateDate' })
  updateDate: Date;
  @ApiProperty({ description: 'Ảnh Minh Hoạ' })
  @Column({ length: 255, type: 'varchar', name: 'AnhMinhHoa', nullable: true })
  anhMinhHoa: string;

  // hinh anh san pham []

  @Column({ name: 'NhaCungCapId', nullable: true, type: 'uuid' })
  @ApiProperty({ description: 'NhaCungCapId' })
  nhaCungCapId: string;

  // nha cung cap entity
  // Orderentity []

  @ApiProperty({ description: 'Danh mục sản phẩm Id' })
  @Column({ type: 'uuid', name: 'ChuongTrinhKhuyenMaiId', nullable: true })
  chuongTrinhKhuyenMaiId: string;
  // chuong trinh khuyen mai entit]
}
