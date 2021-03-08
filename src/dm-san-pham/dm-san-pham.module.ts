import { DmSanPhamService } from './dm-san-pham.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DmSanPhamEntity } from './dm-san-pham.entity';
import { DmSanPhamController } from './dm-san-pham.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DmSanPhamEntity])],
    controllers: [DmSanPhamController],
    providers: [DmSanPhamService],
})
export class DmSanphamModule { }
