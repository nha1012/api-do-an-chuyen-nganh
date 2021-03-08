import { NhaCungCapController } from './nha-cung-cap.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCapEntity } from './nha-cung-cap.entity';

@Module({
    imports: [TypeOrmModule.forFeature([NhaCungCapEntity])],
    controllers: [
        NhaCungCapController,],
    providers: [NhaCungCapService],
})
export class NhaCungCapModule { }
