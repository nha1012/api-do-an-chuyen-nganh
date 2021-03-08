import { NhaCungCapModule } from './nha-cung-cap/nha-cung-cap.module';
import { AvatarModule } from './avatar/avatar.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { WorkshiftModule } from './workshift/workshift.module';
import { ProductModule } from './product/product.module';
import { DmSanphamModule } from './dm-san-pham/dm-san-pham.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    RoleModule,
    AuthModule,
    WorkshiftModule,
    AvatarModule,
    ProductModule,
    DmSanphamModule,
    NhaCungCapModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
