import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api quản lý cửa hàng Rangnar';
  }
}
