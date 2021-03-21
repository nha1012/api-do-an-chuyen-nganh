// tslint:disable-next-line:max-line-length
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { CrudValidationGroups } from '@nestjsx/crud';
import { hash } from 'src/utils/auth.util';
import { RoleEntity } from 'src/role/role.entity';
import { WorkshiftEntity } from 'src/workshift/workshift.entity';
import { AvatarEntity } from 'src/avatar/avatar.entity';
import { TransactionEntity } from 'src/transaction/transaction.entity';
import { ReviewSanPhamEntity } from 'src/review-san-pham/review-san-pham.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'UserId',
  })
  userId: string;

  @ApiProperty({ description: 'Tên tài khoản', required: true })
  @IsString({ groups: [CrudValidationGroups.CREATE] })
  @Length(6, 100, { groups: [CrudValidationGroups.CREATE] })
  @IsNotEmpty({ groups: [CrudValidationGroups.CREATE] })
  @Column({ unique: true, length: 100, type: 'varchar', name: 'Username', nullable: false })
  username: string;

  @ApiProperty({ description: 'Mật khẩu', required: true })
  @IsString()
  @Length(6, 100)
  @IsNotEmpty()
  @Column({ length: 255, type: 'varchar', name: 'Password', nullable: false })
  password: string;

  @Column({ length: 255, type: 'varchar', name: 'DisplayName', nullable: true })
  @ApiProperty({ description: 'Tên hiển thị' })
  @IsString()
  @Length(6, 100)
  displayName: string;

  @ApiProperty({ description: 'Số điện thoại' })
  @IsString()
  @Length(6, 100)
  @Column({ length: 255, type: 'varchar', name: 'PhoneNumber', nullable: true })
  phoneNumber: string;

  @ApiProperty({ description: 'Email' })
  @IsString()
  @Length(6, 100)
  @IsEmail()
  @Column({ length: 255, type: 'varchar', name: 'Email', nullable: true })
  email: string;

  @ApiProperty({ description: 'Địa chỉ' })
  @IsString()
  @Length(6, 100)
  @Column({ length: 255, type: 'varchar', name: 'Address', nullable: true })
  address: string;

  @CreateDateColumn({ name: 'CreateDate' })
  createDate: Date;

  @UpdateDateColumn({ name: 'UpdateDate' })
  updateDate: Date;

  // @Column({ name: 'Avatar', type: 'varchar', nullable: true })
  // avatar: string;

  @Column({ name: 'RoleId', nullable: true, type: 'uuid' })
  @ApiProperty({ description: 'RoleId' })
  roleId: string;

  @JoinColumn({ name: 'RoleId' })
  @ManyToOne(() => RoleEntity, role => role.users)
  role: RoleEntity;


  @OneToMany(() => WorkshiftEntity, workshift => workshift.user, { cascade: true, onDelete: 'CASCADE' })
  workshifts: WorkshiftEntity[];

  @ApiProperty({ description: 'AvatarId' })
  @IsString()
  @Column({ name: 'AvatarId', type: 'uuid', nullable: true })
  avatarId: string;

  @JoinColumn({ name: 'AvatarId' })
  @OneToOne(() => AvatarEntity, avatar => avatar.avatarId, { cascade: true, onDelete: 'CASCADE' })
  avatar: AvatarEntity;

  @OneToMany(() => TransactionEntity, transaction => transaction.user, { cascade: true, onDelete: 'SET NULL' })
  transations: TransactionEntity[]
  @OneToMany(() => ReviewSanPhamEntity, reviewSanPham => reviewSanPham.user, { cascade: true, onDelete: 'CASCADE' })
  reviewSanPhams: ReviewSanPhamEntity[]
}
