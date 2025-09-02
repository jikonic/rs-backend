import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";
import { Invoice } from "./Invoice";

@Index("fk_biljka_client_idx", ["clientId"], {})
@Entity("biljka", { schema: "rs2025" })
export class Biljka {
  @PrimaryGeneratedColumn({ type: "int", name: "biljka_id", unsigned: true })
  biljkaId: number;

  @Column("int", { name: "client_id", unsigned: true })
  clientId: number;

  @Column("varchar", { name: "naziv", length: 255 })
  naziv: string;

  @Column("varchar", { name: "vrsta", length: 255 })
  vrsta: string;

  @Column("double", { name: "cena", precision: 22 })
  cena: number;

  @Column("int", { name: "kolicina" })
  kolicina: number;

  @Column("text", { name: "opis" })
  opis: string;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Client, (client) => client.biljkas, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "client_id", referencedColumnName: "clientId" }])
  client: Client;

  @OneToMany(() => Invoice, (invoice) => invoice.biljka)
  invoices: Invoice[];
}
