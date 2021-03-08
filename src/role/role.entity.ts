import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'roleId',
  })
  roleId: string;

  @Column()
  roleName: string;

  @OneToMany(() => UserEntity, user => user.role)
  users: UserEntity[];
}

export enum RoleEnum {
  Employee = '78f048d3-2416-4ae1-8739-3777796a7080',
  Admin = '72613483-4168-4e5b-b871-06800fab7ae7',
  User = '2ddccc31-3b13-4daf-b02a-8902aca48a14',
}
