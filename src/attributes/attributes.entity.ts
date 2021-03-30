
import { ApiProperty } from '@nestjs/swagger';
import { AttributeValueEntity } from 'src/attribute-value/attribute-value.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AttributesEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'AttributesId' })
  attributesId: string;

  @Column({ name: 'name', type: 'varchar' })
  @ApiProperty({ description: 'Tên thuộc tính' })
  name: string;

  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => AttributeValueEntity, attributeValue => attributeValue.attributes)
  attributeValues: AttributeValueEntity[];
}
