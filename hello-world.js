//hello world
console.log("hello world");

//create server
const http = require ("http")
const server = http.createServer((req,res)=>{
    res.end("<h1>hello node !!!!</h1>")
})
server.listen(3000, (err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("ok")
    }
})
//create file
const fs = require("fs")
fs.writeFile("welcome.txt", "hello node" ,(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
    })
    fs.readFile("welcome.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
    //pass
    const generate = require("generate-password")
    const pass =generate.generate({
        number :true,
        symbols : true,
        uppercase: false ,
        length :20,


    })
    console.log("password:",pass)

    //e-mail sender
    const nodemailer = require ("nodemailer")
    const transporter = nodemailer.createTransport(
        {
            service : "gmail",
            auth:{
                user:"",
                pass : ""
            }
           
        })
        const optionMails = {
          from :"",
          to: "",
          subject :"test from node ",
          text : "hello guys",
        }
        transporter.sendMail(optionMails,(err,res)=>{
            if(err){
            console.log(err)
            }
        else{
            console.log(res)
        }
        })
        
      
    