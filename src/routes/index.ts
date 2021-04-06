import { Router } from "express"
import { getAll } from "../controllers/"
const api = Router()

api.get('/', getAll)
export default api