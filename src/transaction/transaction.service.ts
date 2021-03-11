import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityManager, FindManyOptions } from 'typeorm';
import { TransactionEntity } from './transaction.entity';

@Injectable()
export class TransactionService extends TypeOrmCrudService<TransactionEntity> {
  constructor(@InjectRepository(TransactionEntity) repo, @InjectEntityManager() private transactionManager: EntityManager) {
    super(repo);
  }

  async get(req: CrudRequest): Promise<any> {

    const builder = await this.createBuilder(req.parsed, req.options)
    const result = await builder
      .from('transaction_entity', 'te')
      .select('te.TongTien', 'tongTien')
    return result.execute();
  }

}
