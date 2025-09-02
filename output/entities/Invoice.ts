import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Biljka } from "./Biljka";
import { InvoiceArticle } from "./InvoiceArticle";

@Index("fk_invoice_biljka_idx", ["biljkaId"], {})
@Entity("invoice", { schema: "rs2025" })
export class Invoice {
  @PrimaryGeneratedColumn({ type: "int", name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", { name: "biljka_id", unsigned: true })
  biljkaId: number;

  @Column("int", { name: "usluga_id", unsigned: true })
  uslugaId: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "payed_at", nullable: true })
  payedAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("datetime", { name: "generated_at", nullable: true })
  generatedAt: Date | null;

  @ManyToOne(() => Biljka, (biljka) => biljka.invoices, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "biljka_id", referencedColumnName: "biljkaId" }])
  biljka: Biljka;

  @OneToMany(() => InvoiceArticle, (invoiceArticle) => invoiceArticle.invoice)
  invoiceArticles: InvoiceArticle[];
}
