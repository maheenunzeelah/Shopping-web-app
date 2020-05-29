const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')

const adminModule=require('./routes/admin');
const shopModule=require('./routes/shop')

const app=express();
app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminModule.routes);
app.use(shopModule);

app.use((req,res,next)=>[
    res.status(404).render('404',{pageTitle:'Page Not Found'})
])

app.listen(3000);