import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsNotEmpty, IsString } from 'class-validator';
import { AttributeValueEntity } from 'src/attribute-value/attribute-value.entity';
import { ChuongTrinhKhuyenMaiValueEntity } from 'src/chuong-trinh-khuyen-mai-value/chuong-trinh-khuyen-mai-value.entity';
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
  @ApiProperty({ description: 'Trạng thái', required: true })
  @IsNotEmpty()
  @Column({ type: 'boolean', name: 'Status', default: false, insert: false })
  status: boolean;

  @ApiProperty({ description: 'Giá Khuyến Mãi' })
  @IsNotEmpty()
  @Column({ type: 'float', name: 'GiaKhuyenMai', nullable: true })
  giaKhuyenMai: number;

  @ApiProperty({ description: 'Mô tả' })
  @IsString()
  @Column({ type: 'varchar', name: 'MoTa', nullable: true })
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

  @OneToMany(() => ReviewSanPhamEntity, reviewSanPham => reviewSanPham.product, { cascade: true, onDelete: 'CASCADE' })
  // Review sản phẩm
  reviewSanPhams: ReviewSanPhamEntity[]
  @OneToMany(() => HaSanPhamEntity, haSanPham => haSanPham.product, { cascade: true, onDelete: 'CASCADE' })
  // Hinh ảnh sản phẩm
  hinhAnhSanPhams: HaSanPhamEntity[]
  @OneToMany(() => OrderEntity, order => order.product, { cascade: true, onDelete: 'CASCADE' })
  orders: OrderEntity[]
  // Atrribute select
  @OneToMany(() => AttributeValueEntity, attributeValue => attributeValue.product)
  attributeValues: AttributeValueEntity[]

  @OneToMany(() => ChuongTrinhKhuyenMaiValueEntity, ctkmvl => ctkmvl.product)
  chuongTrinhKhuyenMaiValues: ChuongTrinhKhuyenMaiValueEntity[];
}
