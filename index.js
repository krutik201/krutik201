const http = require ('http')
const { readFileSync } = require('fs')

//get all files
const hopage = readFileSync('./nav-app/index.html')
const style = readFileSync('./nav-app/styles.css')
const ho = readFileSync('./nav-app/browser-app.js')
const st = readFileSync('./nav-app/logo.svg')

 const server = http.createServer((req,res)=>{
    const url=req.url
   console.log(url)
    if(url ==='/')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(hopage)
    res.end() 
    }
    else if(url==='/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(style)
        res.end()
    }
    else if(url==='/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(ho)
        res.end()
    }
    else if(url === '/logo.svg')
    {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        //console.log(req.url)
        res.write(st)
        res.end()
    }
    else if('/contact.html')
     {
      res.writeHead(404,{'content-type':'text/html'})
      //console.log(req.url)contact.html
      res.write('<h1>Contact Krutik,for WEB</h1>')
      res.end()
     }
     else if('/projects.html')
     {
      res.writeHead(404,{'content-type':'text/html'})
      //console.log(req.url)contact.html
      res.write('<h1>1)chat bot</h1>')
      res.end()
     }
 }).listen(5000)