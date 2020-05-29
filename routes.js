const fs=require('fs');

const requestHandler=(req,res)=>{

res.setHeader('Content-Type','text/html');
    if(req.url==='/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Form</h1><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    const body=[]
  if(req.url==='/message' && req.method==='POST'){
    req.on('data',(chunks)=>{
       body.push(chunks)
    })  
    return req.on('end',()=>{
      const parseBody=Buffer.concat(body).toString();
      const message=parseBody.split('=')[1];
      fs.writeFile('message.txt',message, err=>{
        res.statusCode=302; 
        res.setHeader('Location','/')
        return res.end();
      }) 
      
    })
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>HI from Node</body>')
    res.write('</html>');
    res.end();
    
  }
}
module.exports=requestHandler;
    