const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
const products = [[{prodName: "Denim Shirt", prodPrice: "599", imagePath: "https://img.mensxp.com/media/content/2023/May/Main-Image---iStock_6468788f18ba9.jpeg", productId: "1"},
                  {prodName: "Women Leather Jacket", prodPrice: "5999", imagePath: "https://cdn.mos.cms.futurecdn.net/S4wteeb3Wp8fx7DuacS8Eb.jpg", productId: "2"}],
                  [{prodName: "Armani Suits", prodPrice: "6999", imagePath: "https://globalnews.ca/wp-content/uploads/2014/01/armani-men-milan-3.jpg", productId: "3"},
                  {prodName: "Fluffy Yarn Fleece Jacket", prodPrice: "2399", imagePath: "https://media.karousell.com/media/photos/products/2019/04/28/uniqlo_women_fluffy_yarn_fleece_full_zip_jacket_1556430258_59cf2235_progressive.jpg", productId: "4"}],
                  [{prodName: "Denim jacket", prodPrice: "2050", imagePath: "https://www.realmenrealstyle.com/wp-content/uploads/2014/09/casual-dresing-man-in-his-20s.jpg", productId: "5"},
                  {prodName: "Women T-Shirt(Culrpit Apparel)", prodPrice: "999", imagePath: "https://5.imimg.com/data5/SELLER/Default/2022/9/TE/WG/NQ/161162070/t-shirt-for-female-1.jpg", productId: "6"}],
                  [{prodName: "Full Sleeve Pullover", prodPrice: "2500", imagePath: "https://www.dukeindia.com/cdn/shop/files/3_1e1dc87e-2885-4454-a643-0768efea73f3_1024x1024.jpg", productId: "7"},
                  {prodName: "Gucci Top and Skirt", prodPrice: "4999", imagePath: "https://b2295871.smushcdn.com/2295871/wp-content/uploads/2019/01/IMG_8535.jpg", productId: "8"}]
                ];
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})

app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})