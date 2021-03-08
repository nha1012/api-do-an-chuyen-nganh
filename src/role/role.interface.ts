import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class BodyChangePwd {
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsNotEmpty()
  @IsString()
  currentPassword: string;
  @IsNotEmpty()
  @IsString()
  @Length(6, 25)
  newPassword: string;
  @IsNotEmpty()
  @IsString()
  @Length(6, 25)
  newPasswordAgain: string;
}
