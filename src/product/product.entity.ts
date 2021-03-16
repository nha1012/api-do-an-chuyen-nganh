import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ChuongTrinhKhuyenMaiEntity } from 'src/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.entity';
import { DmSanPhamEntity } from 'src/dm-san-pham/dm-san-pham.entity';
import { HaSanPhamEntity } from 'src/ha-san-pham/ha-san-pham.entity';
import { NhaCungCapEntity } from 'src/nha-cung-cap/nha-cung-cap.entity';
import { OrderEntity } from 'src/order/order.entity';
import { ReviewSanPhamEntity } from 'src/review-san-pham/review-san-pham.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
  @ManyToOne(() => DmSanPhamEntity, dmSanPham => dmSanPham.products)
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
  @JoinColumn({ name: 'NhaCungCapId' })
  @ManyToOne(() => NhaCungCapEntity, nhaCungCap => nhaCungCap.products)
  nhaCungCap: NhaCungCapEntity

  // Orderentity []

  @ApiProperty({ description: 'Chương trình khuyến mãi Id' })
  @Column({ type: 'uuid', name: 'ChuongTrinhKhuyenMaiId', nullable: true })
  chuongTrinhKhuyenMaiId: string;
  // chuong trinh khuyen mai entit]

  @JoinColumn({ name: 'ChuongTrinhKhuyenMaiId' })
  @ManyToOne(() => ChuongTrinhKhuyenMaiEntity, chuongTrinhKhuyenMai => chuongTrinhKhuyenMai.products)
  chuongTrinhKhuyenMai: ChuongTrinhKhuyenMaiEntity;

  @OneToMany(() => ReviewSanPhamEntity, reviewSanPham => reviewSanPham.product, { cascade: true, onDelete: 'CASCADE' })
  reviewSanPhams: ReviewSanPhamEntity[]
  @OneToMany(() => HaSanPhamEntity, haSanPham => haSanPham.product, { cascade: true, onDelete: 'CASCADE' })
  hinhAnhSanPhams: HaSanPhamEntity[]
  @OneToMany(() => OrderEntity, order => order.product, { cascade: false, onDelete: 'CASCADE' })
  orders: HaSanPhamEntity[]
}
