import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 60 })
  fullName: string;

  @Column({ unique: true, type: "varchar", length: 27 })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @ManyToOne(() => User, { cascade: true })
  user: User;
}
