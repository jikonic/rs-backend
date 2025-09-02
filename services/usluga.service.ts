import { IsNull } from "typeorm";
import { AppDataSource } from "../src/db";
import { Usluga } from "../output/entities/Usluga";


const repo = AppDataSource.getRepository(Usluga)

export class UslugaService {
    static async getUsluge() {
        return await repo.find ({
            select: {
                uslugaId: true,
                naziv: true,
                cena: true
            },
            where: {
                deletedAt: IsNull()
            }
        })
    }

    static async getUslugaById (id: number) {
        const data = await repo.findOne({
            where: {
                deletedAt: IsNull()
            }
        })
        if (data == null)
            throw new Error ('NOT_FOUND')
        return data
    }
}