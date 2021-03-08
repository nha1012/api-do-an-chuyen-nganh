import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AvatarEntity } from './avatar.entity';

@Injectable()
export class AvatarService extends TypeOrmCrudService<AvatarEntity> {
  constructor(@InjectRepository(AvatarEntity) repo) {
    super(repo);
  }
}
