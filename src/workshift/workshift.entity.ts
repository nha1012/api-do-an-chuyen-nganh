import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from 'src/user/user.entity';
import { IsDate, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjsx/crud/lib/crud';

@Entity()
export class WorkshiftEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'WorkshiftId',
  })
  workshiftId: string;

  @Column({ type: 'varchar', name: 'Workshift', nullable: false })
  @IsNotEmpty()
  @ApiProperty({ description: 'Ca làm việc', required: true })
  workshift: CaLamEnum;

  @Column({ type: 'date', name: 'Date', nullable: false })
  @IsDate()
  @ApiProperty({ description: 'Ngày làm việc', required: true })
  date: Date;

  @Column({ type: 'uuid', name: 'UserId', nullable: false })
  @IsDate()
  @ApiProperty({ description: 'Id người dùng', required: true })
  userId: string;

  @Column({ type: 'boolean', name: 'Status', nullable: true, default: false, insert: false })
  @IsDate()
  @ApiProperty({ description: 'Status', required: true })
  status: boolean;

  @JoinColumn({ name: 'UserId' })
  @ManyToOne(() => UserEntity, user => user.userId, { onDelete: 'CASCADE' })
  user: UserEntity;
}

export enum CaLamEnum {
  SANG = 'SANG',
  CHIEU = 'CHIEU',
  TOI = 'TOI',
}
