import {v4} from 'uuid'
import {getConnection} from '../database.js'

export const  getLogs = (req,res) => {
    try {
        const logs = getConnection().data.LOGs;
    res.status(200).json(logs)
    } catch (error) {
        return rest.status(500).send({message: error.message})
    }
};

export const  createLog = async (req,res) => {
    
    const newLog = {
       id:v4(),
       fecha: req.body.fecha,
       mensaje: req.body.mensaje,
       prioridad: req.body.prioridad,
       usuario: req.body.usuario,
       subsistema: req.body.subsistema 
    };
    try {
        const db = getConnection();
        db.data.LOGs.push(newLog);
        await db.write();

        res.status(200).json(newLog);
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
    
};

export const  getLogByID = (req,res) => {
    const logFound = getConnection().data.LOGs.find(
        log => log.id === req.params.id)
    if(logFound)
        res.status(200).json(logFound)
    else
        return res.status(500).send("Log no encontrado")
};

export const  updateLog = async(req,res) => {
    try {
        const db = getConnection();
        const logFound = db.data.LOGs.find(
            log => log.id === req.params.id)
        if(!logFound)
           return res.sendStatus(404)

        logFound.fecha =   req.body.fecha;
		logFound.mensaje = req.body.mensaje;
		logFound.prioridad =  req.body.prioridad;
		logFound.usuario =  req.body.usuario;
		logFound.subsistema =    req.body.subsistema;
           db.data.LOGs.map((l) => (l.id === req.params.id ? logFound : l));

           await db.write();
           res.status(200).json(logFound)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

export const  deleteLog = async(req,res) => {
    const db = getConnection();
        const logFound = getConnection().data.LOGs.find(
            log => log.id === req.params.id)
        if(!logFound)
           return res.sendStatus(404)

           const newLog = db.data.LOGs.filter((l) => l.id  !== req.params.id);
            db.data.LOGs = newLog

           await db.write();

           return res.status(200).json(logFound)
};