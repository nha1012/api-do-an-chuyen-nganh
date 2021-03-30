import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AttributeValueEntity } from './attribute-value.entity';

@Injectable()
export class AttributeValueService extends TypeOrmCrudService<AttributeValueEntity> {
  constructor(@InjectRepository(AttributeValueEntity) repo) {
    super(repo);
  }
}
