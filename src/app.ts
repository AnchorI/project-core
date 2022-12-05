import express from 'express'
import cors from 'cors'
import adminRoutes from './api/admin/routes'

const app = express()

app.use(cors())

app.use('/api/slave', adminRoutes)

export default app
