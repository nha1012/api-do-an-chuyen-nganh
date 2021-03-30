import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AttributesEntity } from './attributes.entity';

@Injectable()
export class AttributesService extends TypeOrmCrudService<AttributesEntity> {
  constructor(@InjectRepository(AttributesEntity) repo) {
    super(repo);
  }
}
