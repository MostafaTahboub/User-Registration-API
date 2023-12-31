import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false , length:255})
    name :string

    @BeforeInsert()
    async hashPassword() {
      if (this.password) {
        this.password = await bcrypt.hash(this.password, 10)
      }
    }
      @Column({nullable:false})
      password: string

}