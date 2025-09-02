import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uq_user_username", ["username"], { unique: true })
@Entity("user", { schema: "rs2025" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "username", unique: true, length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("tinyint", { name: "active", unsigned: true, default: () => "'1'" })
  active: number;
}
