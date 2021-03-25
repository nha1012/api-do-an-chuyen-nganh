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
    const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const query = this.repo.createQueryBuilder('a')
    query.where('a.createDate < :date', { date })
    // const querySt =
    const data = await query.getMany();

    // data.filter(tranSaction => tranSaction.createDate < date)
    // // const data = await query.getMany()
    // // const values = await this.getMany(req) as TransactionEntity[];
    // // const result = { datas: [] };
    console.log(data);

    return data;
  }

}
