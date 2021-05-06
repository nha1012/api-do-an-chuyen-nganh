
import { ApiProperty } from '@nestjs/swagger';
import { AttributesEntity } from 'src/attributes/attributes.entity';
import { ProductEntity } from 'src/product/product.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AttributeValueEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'AttributeValueId' })
  attributeValueId: string;

  @Column({ name: 'Value', type: 'varchar' })
  @ApiProperty({ description: 'Value' })
  value: string;

  @Column({ name: 'ProductId', type: 'uuid', nullable: false })
  @ApiProperty({ description: 'ProductId' })
  productId: string;

  @JoinColumn({ name: 'ProductId' })
  @ManyToOne(() => ProductEntity, product => product.attributeValues, { onDelete: 'CASCADE' })
  product: ProductEntity;

  @Column({ name: 'AttributesId', type: 'uuid', nullable: false })
  @ApiProperty({ description: 'AttributesId' })
  attributesId: string;

  @JoinColumn({ name: 'AttributesId' })
  @ManyToOne(() => AttributesEntity, attributes => attributes.attributeValues, {onDelete: 'CASCADE' })
  attributes: AttributesEntity;

  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
}
