import { ChuongTrinhKhuyenMaiController } from './chuong-trinh-khuyen-mai.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.entity';
import { ChuongTrinhKhuyenMaiService } from './chuong-trinh-khuyen-mai.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChuongTrinhKhuyenMaiEntity])],
    controllers: [
        ChuongTrinhKhuyenMaiController,],
    providers: [ChuongTrinhKhuyenMaiService],
})
export class ChuongTrinhKhuyenMaiModule { }
