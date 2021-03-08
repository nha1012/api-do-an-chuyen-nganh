import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { UserEntity } from 'src/user/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AvatarEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'AvatarId' })
  avatarId: string;

  @Column({ name: 'UserId', nullable: true, type: 'uuid' })
  @ApiProperty({ description: 'UserId' })
  userId: string;

  @JoinColumn({ name: 'UserId' })
  @OneToOne(() => UserEntity, user => user.userId)
  user: UserEntity;


  @Column({ name: 'Url', nullable: false })
  @ApiProperty({ description: 'Url' })
  url: string;

  @CreateDateColumn({ name: 'CreateDate' })
  createDate: Date;

  @UpdateDateColumn({ name: 'UpdateDate' })
  updateDate: Date;
}
