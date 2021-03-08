import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvatarController } from './avatar.controller';
import { AvatarEntity } from './avatar.entity';
import { AvatarService } from './avatar.service';

@Module({
    imports: [TypeOrmModule.forFeature([AvatarEntity])],
    controllers: [AvatarController],
    providers: [AvatarService],
})
export class AvatarModule { }
