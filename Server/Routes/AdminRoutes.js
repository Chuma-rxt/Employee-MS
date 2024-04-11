import express from 'express'

const router = express.Router()

router.post('/adminlogin',(req, res) => {
    const sql = "SELCT * from admin Where email = ? and password = ?"
})

export {router as adminRouter}