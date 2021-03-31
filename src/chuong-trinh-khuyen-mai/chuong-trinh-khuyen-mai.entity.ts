import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { ChuongTrinhKhuyenMaiValueEntity } from "src/chuong-trinh-khuyen-mai-value/chuong-trinh-khuyen-mai-value.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChuongTrinhKhuyenMaiEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ChuongTrinhKhuyenMaiId' })
  chuongTrinhKhuyenMaiId: string;

  @Column({ type: 'date', name: "StartDate" })
  @IsNumber()
  @ApiProperty({ description: 'StartDate' })
  startDate: Date;

  @Column({ type: 'date', name: "EndDate" })
  @ApiProperty({ description: 'EndDate' })
  endDate: Date;

  @Column({ type: 'varchar', name: "TenChuongTrinh" })
  @ApiProperty({ description: 'Tên chương trình khuyến mãi' })
  tenChuongTrinh: string;

  @OneToMany(() => ChuongTrinhKhuyenMaiValueEntity, ctkmvl => ctkmvl.chuongTrinhKhuyenMai)
  chuongTrinhKhuyenMaiValues: ChuongTrinhKhuyenMaiValueEntity[];
}
