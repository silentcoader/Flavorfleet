
const Razorpay = require('razorpay');
const KEY_ID = 'rzp_test_KZvnVzz6h7jk2g'
const KEY_SECRET = 'vpZ11axK2ArMX3ry0sxvUGf2'


module.exports.orders = (req, res) => {

    
let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })

var options = {
  amount: req.body.amount * 100,  // amount in the smallest currency unit
  currency: "INR",
 
};
instance.orders.create(options, function(err, order) {
    if(err) {
        return res.send({ code: 500, message: 'Server err.'})
    }
  return res.send({ code: 200, message: 'order created', data : order})
});
 
}


module.exports.verify = () => {
    res.send({verify})
}