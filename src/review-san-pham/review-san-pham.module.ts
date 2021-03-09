import { ReviewSanPhamController } from './review-san-pham.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewSanPhamEntity } from './review-san-pham.entity';
import { ReviewSanPhamService } from './review-san-pham.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReviewSanPhamEntity])],
    controllers: [
        ReviewSanPhamController,],
    providers: [ReviewSanPhamService],
})
export class ReviewSanPhamModule { }
