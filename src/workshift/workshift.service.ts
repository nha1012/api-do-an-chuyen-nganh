import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { WorkshiftEntity } from './workshift.entity';

@Injectable()
export class WorkshiftService extends TypeOrmCrudService<WorkshiftEntity> {
  constructor(@InjectRepository(WorkshiftEntity) repo) {
    super(repo);
  }
}
