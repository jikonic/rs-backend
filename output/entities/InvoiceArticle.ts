import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoice } from "./Invoice";
import { Usluga } from "./Usluga";

@Index("fk_invoice_article_invoice_idx", ["invoiceId"], {})
@Index("fk_invoice_article_usluga_idx", ["uslugaId"], {})
@Entity("invoice_article", { schema: "rs2025" })
export class InvoiceArticle {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "invoice_article_id",
    unsigned: true,
  })
  invoiceArticleId: number;

  @Column("int", { name: "usluga_id", unsigned: true })
  uslugaId: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("double", { name: "cena", unsigned: true, precision: 22 })
  cena: number;

  @Column("int", { name: "discount", unsigned: true })
  discount: number;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceArticles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "invoiceId" }])
  invoice: Invoice;

  @ManyToOne(() => Usluga, (usluga) => usluga.invoiceArticles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usluga_id", referencedColumnName: "uslugaId" }])
  usluga: Usluga;
}
