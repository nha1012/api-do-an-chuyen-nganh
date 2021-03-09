import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HaSanPhamController } from './ha-san-pham.controller';
import { HaSanPhamEntity } from './ha-san-pham.entity';
import { HaSanPhamService } from './ha-san-pham.service';

@Module({
    imports: [TypeOrmModule.forFeature([HaSanPhamEntity])],
    controllers: [HaSanPhamController,],
    providers: [HaSanPhamService],
})
export class HinhAnhSanPhamModule { }
