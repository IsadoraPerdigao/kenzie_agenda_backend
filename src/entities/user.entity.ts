import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("users")
export class User {
  @BeforeInsert()
  hashPassword() {
    const bcryptjs = require("bcryptjs");
    this.password = bcryptjs.hashSync(this.password, 10);
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 60 })
  fullName: string;

  @Column({ unique: true, type: "varchar", length: 27 })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 15 })
  phone: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
