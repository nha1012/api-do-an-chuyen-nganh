import { AttributesController } from './attributes.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributesService } from './attributes.service';
import { AttributesEntity } from './attributes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AttributesEntity])],
    controllers: [
        AttributesController,],
    providers: [AttributesService],
})
export class AttributesModule { }
