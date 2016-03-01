var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  var marketcloud = req.app.get('mc-client');
  

	marketcloud.products.list()
		.then(function(products){
			console.log('Products retrieved')
			console.log(products)
  		res.render('index', { title: 'Express' , products: products});
	})
	.catch(function(error){
		console.log(error)
		res.render('error',{ title: 'Express', message: 'Error', error: error})
	})
});

module.exports = router;
