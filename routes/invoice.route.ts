import { Router } from "express";
import { errorResponse } from "../utils";
import { InvoiceService } from "../services/invoice.service";

export const InvoiceRoute = Router()
InvoiceRoute.get('/', async (req,res) => {
    try {
        res.json(await InvoiceService.getInvoices())
    } catch (e:any) {
        errorResponse(res,e)
    }
})
InvoiceRoute.get('/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id)
        res.json(await InvoiceService.getInvoiceById(id))
    }catch (e:any){
        errorResponse(res,e)
    }
})