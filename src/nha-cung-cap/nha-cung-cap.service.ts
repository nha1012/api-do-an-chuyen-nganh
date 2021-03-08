import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { NhaCungCapEntity } from './nha-cung-cap.entity';

@Injectable()
export class NhaCungCapService extends TypeOrmCrudService<NhaCungCapEntity> {
  constructor(@InjectRepository(NhaCungCapEntity) repo) {
    super(repo);
  }
}
