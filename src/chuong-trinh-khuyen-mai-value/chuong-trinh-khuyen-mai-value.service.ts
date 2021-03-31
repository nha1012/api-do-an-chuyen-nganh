import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ChuongTrinhKhuyenMaiValueEntity } from './chuong-trinh-khuyen-mai-value.entity';

@Injectable()
export class ChuongTrinhKhuyenMaiValueService extends TypeOrmCrudService<ChuongTrinhKhuyenMaiValueEntity> {
  constructor(@InjectRepository(ChuongTrinhKhuyenMaiValueEntity) repo) {
    super(repo);
  }
}
