import { ChuongTrinhKhuyenMaiValueController } from './chuong-trinh-khuyen-mai-value.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuongTrinhKhuyenMaiValueEntity } from './chuong-trinh-khuyen-mai-value.entity';
import { ChuongTrinhKhuyenMaiValueService } from './chuong-trinh-khuyen-mai-value.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChuongTrinhKhuyenMaiValueEntity])],
    controllers: [
        ChuongTrinhKhuyenMaiValueController,],
    providers: [ChuongTrinhKhuyenMaiValueService],
})
export class ChuongTrinhKhuyenMaiValueModule { }
