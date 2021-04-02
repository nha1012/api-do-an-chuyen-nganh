import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ResponseStatistics } from 'src/transaction/type-bao-cao.interface';
import { getManager } from 'typeorm';
import { ProductEntity } from './product.entity';
import * as _ from 'lodash';
@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
  constructor(@InjectRepository(ProductEntity) repo) {
    super(repo);
  }

  async getThongKeSPTonKho() {
    const orders = await getManager()
      .createQueryBuilder(ProductEntity, "product")
      .select()
      .where('product.soLuong > 0')
      .getMany();

    const result: ResponseStatistics = { datas: [] };
    const groupTen = _.groupBy(orders, v => v.tenSanPham); // Groupby theo ten
    for (const key in groupTen) {
      if (groupTen.hasOwnProperty(key)) {
        const element = groupTen[key];
        result.datas.push({ name: key, value: _.sumBy(element, e => e.soLuong) });
      }
    }
    return result;
  }
  async getThongKeSTTonKho() {
    const orders = await getManager()
      .createQueryBuilder(ProductEntity, "product")
      .select()
      .where('product.soLuong > 0')
      .getMany();

    const result: ResponseStatistics = { datas: [] };
    const groupTen = _.groupBy(orders, v => v.tenSanPham); // Groupby theo ten
    for (const key in groupTen) {
      if (groupTen.hasOwnProperty(key)) {
        const element = groupTen[key];
        result.datas.push({ name: key, value: _.sumBy(element, e => e.soLuong * e.giaKhuyenMai) });
      }
    }
    return result;
  }
}
