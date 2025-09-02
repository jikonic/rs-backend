import { AppDataSource } from "../src/db";
import { Invoice } from "../output/entities/Invoice";
import { IsNull } from "typeorm";


const repo = AppDataSource.getRepository(Invoice)

export class InvoiceService {
    static async getInvoices(){
        return await repo.find({
            select: {
                invoiceId: true,
                createdAt: true,
                generatedAt:true,
                payedAt: true
            },
            where: {
                deletedAt: IsNull()
            },
            relations: { 
                biljka: {
                    client: true
                }
            }
        })
    }
static async getInvoiceById(id: number){
    const data = repo.findOne({
        where: {
            deletedAt: IsNull()
        },
        relations: {
            biljka: {
                client: true
            },
            invoiceArticles: {
                usluga: true
            }
        }
    })

    if (data == null)
        throw new Error ('NOT_FOUND')
    return data
}

}