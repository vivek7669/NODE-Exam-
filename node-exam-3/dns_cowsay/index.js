const express = require('express');
const dns = require('dns');
// const { cowsay ,think, SQUIRREL } = require('cowsay');
const cowsay  = require('cowsay');
const app= express();
const port = process.env.PORT || 3040;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the world!");
});
//DNS :Lookup
dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
//DNS:Resolve

dns.resolve('nodejs.org',"A", (err, addresses) => {
  if (err) throw err;
  console.log('MX records:', addresses);
  addresses.forEach(address => {
    console.log(`IP: ${address}`);
  });
});



app.listen(port , ()=>{
    // 1st Way
    // console.log(think({
    //   text: '`Server is running on port ${port}`',
    //   cow: SQUIRREL,
    //   eyes: '00',
    //   tongue: ';;',
    //   mode: 'd'
    // }));

    //2nd way
    console.log(cowsay.say({
        text : `Server is running on port ${port}`,
        e : "OG",
        T : "V "
    }));
});