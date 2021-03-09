import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.entity';

@Injectable()
export class ChuongTrinhKhuyenMaiService extends TypeOrmCrudService<ChuongTrinhKhuyenMaiEntity> {
  constructor(@InjectRepository(ChuongTrinhKhuyenMaiEntity) repo) {
    super(repo);
  }
}
