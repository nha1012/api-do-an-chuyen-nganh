import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InsertResult, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(@InjectRepository(UserEntity) repo) {
    super(repo);
  }
  register(newUser: UserEntity): UserEntity | PromiseLike<UserEntity> {
    return this.repo.save(newUser);
  }
}
