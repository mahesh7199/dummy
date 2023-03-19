const express = require("express");
const router = express.Router();

const Product = require("../Model")



// Get all products from the database
router.get('/getProducts', async(req,res)=>{
    const allData = await Product.find({});
    res.json(allData)
})




// Add new Product entry in the database
router.post('/addProduct',async (req,res)=>{
    // check the availability of the product
    const result = await Product.findOne({ productName: 
        { $regex: new RegExp(`^${req.body.productName}$`), $options: 'i' } // For case insensitive names
    }).select("productName").lean();

    // if product is already in the database then update it
    if(result){
        Product.findOneAndUpdate({productName: { $regex: new RegExp(`^${req.body.productName}$`), $options: 'i' }},req.body).then(()=>{
            console.log('updated the product')
            res.send('0') 
    })
    }
    // Otherwise create new entry
    else{
        const product = Product(req.body)
        product.save().then(()=>{
             console.log('added new product')
             res.send('1')
        })
    }
})



//Update the entry
// Product names are unique so no need to use ID
router.post('/updateProduct', async (req,res) => {
    Product.findOneAndUpdate({productName: { $regex: new RegExp(`^${req.body.productName}$`), $options: 'i' }},req.body, {new: true}).then((err, doc)=>{
        if(doc){
        console.log('updated the product')
            res.send('updated the product')
        }else{
            console.log('didn\'t find the product')
            res.send('didn\'t find the product')
        }
    })
})

//update using ID
router.post('/updateByID', async (req,res) => {
    Product.findByIdAndUpdate(req.body._id,req.body).then(()=>{
        
        console.log('updated the product')
            res.send('updated the product')
        
    })
})

module.exports = router