import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';

@Injectable()
export class RoleService extends TypeOrmCrudService<RoleEntity> {
  constructor(@InjectRepository(RoleEntity) repo) {
    super(repo);
  }
}
