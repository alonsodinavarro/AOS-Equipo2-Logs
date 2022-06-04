import {Low, JSONFile} from 'lowdb'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url'

let db;

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
    const file = join(__dirname,'../db.json')
    const adapter = new JSONFile(file)
    console.log(__dirname);
    db = new Low(adapter)

    await db.read()

    db.data ||= {LOGs: []}

    db.write()
}

export const getConnection = () => db;