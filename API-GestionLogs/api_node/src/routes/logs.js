import { Router } from "express";
import { createLog, deleteLog, getLogByID, getLogs, updateLog } from "../controllers/log.controller.js";

const router =Router()

router.get("/logs",getLogs);
router.post("/logs",createLog);
router.get("/logs/:id",getLogByID);
router.put("/logs/:id",updateLog);
router.delete("/logs/:id",deleteLog);


export default router;