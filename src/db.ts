import { DataSource } from "typeorm";
import { Biljka } from "../output/entities/Biljka";
import { Client } from "../output/entities/Client";
import { Invoice } from "../output/entities/Invoice";
import { InvoiceArticle } from "../output/entities/InvoiceArticle";
import { User } from "../output/entities/User";
import { Usluga } from "../output/entities/Usluga";


export const AppDataSource = new DataSource ({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'rs2025',
    entities: [
        Biljka, Client, Invoice, InvoiceArticle, User, Usluga
    ],
    logging: false


}
)