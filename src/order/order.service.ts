import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ResponseStatistics, SeriesInterface } from 'src/transaction/type-bao-cao.interface';
import { getManager } from 'typeorm';
import { OrderEntity } from './order.entity';
import * as _ from 'lodash';
import * as moment from 'moment';
@Injectable()
export class OrderService extends TypeOrmCrudService<OrderEntity> {
  constructor(@InjectRepository(OrderEntity) repo) {
    super(repo);
  }
  getBaoBaoThongKe(req) {
    return this.repo.find(req);
  }
  async getBaoCaoNhaCungCap() {
    const orders = await getManager()
      .createQueryBuilder(OrderEntity, "orders")
      .leftJoinAndSelect('orders.product', 'product')
      .leftJoinAndSelect('product.nhaCungCap', 'nhaCungCap')
      .addOrderBy('orders.createDate', 'DESC')
      .getMany();

    const result: ResponseStatistics = { datas: [] };
    const groupTenNhaCUngCap = _.groupBy(orders, v => v.product.nhaCungCap.tenNhaCungCap);// Groupbyy ten nha cung cung cap
    for (const key in groupTenNhaCUngCap) {
      if (groupTenNhaCUngCap.hasOwnProperty(key)) {
        const element = groupTenNhaCUngCap[key];
        result.datas.push({ name: key, value: _.sumBy(element, e => e.tongTien) });
      }
    }
    return result;
  }

  async getBaoCaoTheoNgay(params) {
    const { startDate, endDate } = params

    const orders = await getManager()
      .createQueryBuilder(OrderEntity, "orders")
      .leftJoinAndSelect('orders.product', 'product')
      .leftJoinAndSelect('product.nhaCungCap', 'nhaCungCap')
      .where(`orders.createDate BETWEEN '${startDate}' AND '${endDate}'`)
      .addOrderBy('orders.createDate', 'DESC')
      .getMany();

    const result: ResponseStatistics = { datas: [] };
    const groupNgay = _.groupBy(orders, v => moment(v.createDate).format('DD/MM/YYYY'));// Groupby theo ngay
    for (const key in groupNgay) {
      if (groupNgay.hasOwnProperty(key)) {
        const element = groupNgay[key];
        result.datas.push({ name: key, value: _.sumBy(element, e => e.tongTien) });
      }
    }
    return result;
  }
}
