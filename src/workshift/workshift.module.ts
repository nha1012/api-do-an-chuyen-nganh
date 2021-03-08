import { WorkshiftController } from './workshift.controller';
import { WorkshiftService } from './workshift.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshiftEntity } from './workshift.entity';

@Module({
    imports: [TypeOrmModule.forFeature([WorkshiftEntity])],
    controllers: [WorkshiftController],
    providers: [WorkshiftService],
})
export class WorkshiftModule { }
