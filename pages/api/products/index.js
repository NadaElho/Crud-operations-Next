import { products } from '@component/pages/data/products'

export default function productHandler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json({ message: products })
  } else if (req.method == 'POST') {
    const {prd} = req.body
    products.push({id: products.length, name: prd})
    res.status(200).json(prd)
  }
}
