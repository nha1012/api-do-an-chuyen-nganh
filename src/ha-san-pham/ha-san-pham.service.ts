import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { HaSanPhamEntity } from './ha-san-pham.entity';

@Injectable()
export class HaSanPhamService extends TypeOrmCrudService<HaSanPhamEntity> {
  constructor(@InjectRepository(HaSanPhamEntity) repo) {
    super(repo);
  }
}
