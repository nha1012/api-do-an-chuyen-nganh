import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityManager, FindManyOptions } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import * as lodash from 'lodash';

@Injectable()
export class TransactionService extends TypeOrmCrudService<TransactionEntity> {
  constructor(@InjectRepository(TransactionEntity) repo, @InjectEntityManager() private transactionManager: EntityManager) {
    super(repo);
  }

  async getThongKe(req: CrudRequest): Promise<any> {

  }

}
