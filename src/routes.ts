import {Router} from 'express'


const routes = Router()

routes.post('/users',(req, res)=>{

    const {
        
    } = req.body

    console.log(req.query)
    return(
        res.json({message:'hello world'})
    )   
})

export default routes