import { Router } from "express";
import { errorResponse } from "../utils";
import { UslugaService } from "../services/usluga.service";

export const UslugaRoute = Router()
UslugaRoute.get('/', async (req,res) => {
    try {
        res.json(await UslugaService.getUsluge())
    } catch (e:any) {
        errorResponse(res,e)
    }
})
UslugaRoute.get('/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id)
        res.json(await UslugaService.getUslugaById(id))
    }catch (e:any){
        errorResponse(res,e)
    }
})