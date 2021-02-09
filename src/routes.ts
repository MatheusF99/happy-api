import {Router} from 'express'


const routes = Router()

routes.get('/',(req, res)=>{
    console.log(req.query)
    return(
        res.json({message:'hello world'})
    )   
})

export default routes