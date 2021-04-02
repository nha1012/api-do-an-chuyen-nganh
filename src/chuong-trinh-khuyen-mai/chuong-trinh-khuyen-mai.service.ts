import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ResponseStatistics, TypeBaoCaoInterface, SeriesInterface } from 'src/transaction/type-bao-cao.interface';
import { getManager } from 'typeorm';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.entity';
import * as _ from 'lodash';
import { OrderEntity } from 'src/order/order.entity';

@Injectable()
export class ChuongTrinhKhuyenMaiService extends TypeOrmCrudService<ChuongTrinhKhuyenMaiEntity> {
  constructor(@InjectRepository(ChuongTrinhKhuyenMaiEntity) repo) {
    super(repo);
  }
  async getThongKe(params: { chuongTrinhKhuyenMaiId: string }): Promise<any> {
    const { chuongTrinhKhuyenMaiId } = params
    const ctkms = await getManager()
      .createQueryBuilder(ChuongTrinhKhuyenMaiEntity, "ctkm")
      .where(`ctkm.chuongTrinhKhuyenMaiId = :id`, { id: chuongTrinhKhuyenMaiId })
      .leftJoinAndSelect('ctkm.chuongTrinhKhuyenMaiValues', 'chuongTrinhKhuyenMaiValues')
      .leftJoinAndSelect('chuongTrinhKhuyenMaiValues.product', 'product')
      .leftJoinAndSelect('product.orders', 'orders')
      .andWhere(`orders.createDate BETWEEN ctkm.startDate AND ctkm.endDate`)
      .getOne();
    const result: SeriesInterface[] = [];
    if (ctkms) {
      const ctkmValues = ctkms.chuongTrinhKhuyenMaiValues;
      const gTenSP = _.groupBy(ctkmValues, v => v.product.tenSanPham); //group by tên sản phẩm
      for (const key in gTenSP) {
        if (gTenSP.hasOwnProperty(key)) {
          const [element] = gTenSP[key];
          const orders = element.product.orders
          result.push({ name: key, value: _.sumBy(orders, order => order.tongTien) });
        }
      }
      return result;
    } else {
      return result;
    }
  }
}
