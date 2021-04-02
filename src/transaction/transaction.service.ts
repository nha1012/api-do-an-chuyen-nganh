import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityManager, FindManyOptions } from 'typeorm';
import { TransactionEntity, TypeTGBaoCao } from './transaction.entity';
import * as moment from 'moment';
import * as _ from 'lodash';
import { getManager } from "typeorm";
import { ResponseStatistics, SeriesInterface, TypeBaoCaoInterface } from './type-bao-cao.interface';

@Injectable()
export class TransactionService extends TypeOrmCrudService<TransactionEntity> {
  constructor(@InjectRepository(TransactionEntity) repo) {
    super(repo);
  }

  async getThongKe(params: { startDate: Date, endDate: Date }): Promise<any> {
    const { startDate, endDate } = params
    let baoCaos: TypeBaoCaoInterface[] = []
    const tranSactions = await getManager()
      .createQueryBuilder(TransactionEntity, "transaction")
      .where(`transaction.createDate BETWEEN '${startDate}' AND '${endDate}'`)
      .leftJoinAndSelect('transaction.orders', 'orders')
      .leftJoinAndSelect('orders.product', 'product')
      .addOrderBy('transaction.createDate', 'DESC')
      .getMany();
    const result: ResponseStatistics = { datas: [] };
    const gPayment = _.groupBy(tranSactions, v => v.payment);// Groupbyy phuong thuc thanh toan
    for (const key in gPayment) {
      if (gPayment.hasOwnProperty(key)) {
        const element = gPayment[key];
        const grNgay = _.groupBy(element, e => {
          const ngay = moment(e.createDate).format('DD/MM/YYYY');
          return ngay;
        });
        const series: SeriesInterface[] = [];
        for (const ngay in grNgay) {
          if (grNgay.hasOwnProperty(ngay)) {
            const elementTT = grNgay[ngay];
            series.push({ name: ngay, value: _.sumBy(elementTT, e => e.orders.length) });
          }
        }
        result.datas.push({ name: key, series });
      }
    }
    return result;
  }
}
