import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DmSanPhamEntity } from './dm-san-pham.entity';

@Injectable()
export class DmSanPhamService extends TypeOrmCrudService<DmSanPhamEntity> {
  constructor(@InjectRepository(DmSanPhamEntity) repo) {
    super(repo);
  }
}
