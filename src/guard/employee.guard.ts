
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleEnum } from 'src/role/role.entity';

@Injectable()
export class EmployeeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      const roleId = request.user.roleId;
      if (roleId === RoleEnum.Admin || roleId === RoleEnum.Employee)
        return true
    }
    throw new UnauthorizedException('Không có quyền truy cập');
  }
}
