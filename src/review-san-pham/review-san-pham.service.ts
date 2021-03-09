import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ReviewSanPhamEntity } from './review-san-pham.entity';

@Injectable()
export class ReviewSanPhamService extends TypeOrmCrudService<ReviewSanPhamEntity> {
  constructor(@InjectRepository(ReviewSanPhamEntity) repo) {
    super(repo);
  }
}
