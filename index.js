const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  // res.sendFile(path.join(__dirname+'/css'));
  // res.sendFile(path.join(__dirname+'/js'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static(__dirname + ''));
app.listen(process.env.port || 5000);


// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   // .use(express.static(path.join(__dirname, 'public')))
//   // .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'html')
//   .get('/', (req, res) => res.render('index.html'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
