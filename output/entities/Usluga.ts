import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceArticle } from "./InvoiceArticle";

@Entity("usluga", { schema: "rs2025" })
export class Usluga {
  @PrimaryGeneratedColumn({ type: "int", name: "usluga_id", unsigned: true })
  uslugaId: number;

  @Column("varchar", { name: "naziv", length: 255 })
  naziv: string;

  @Column("double", { name: "cena", unsigned: true, precision: 22 })
  cena: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => InvoiceArticle, (invoiceArticle) => invoiceArticle.usluga)
  invoiceArticles: InvoiceArticle[];
}
