import { products } from '@component/pages/data/products'

export default function productHandler(req, res){
    if(req.method == "DELETE"){
        const {prdId} = req.query
        console.log(prdId);
        let index = products.findIndex((prd)=>prd.id == +prdId)
        products.splice(index, 1)
        res.status(200).json({message: "Deleted"})
        
    }else if(req.method == "PATCH"){
        const {prdId} = req.query
        console.log(prdId);
        let index = products.findIndex((prd)=>prd.id == +prdId)
        products[index].name = JSON.parse(req.body);
        res.status(200).json({message: "Updated"})
    }
}