const {accessKeyID, accessKeySecret} = require('../../config/access_key.json')

const oss = require('ali-oss');
const client = oss({
    accessKeyId: accessKeyID,
    accessKeySecret: accessKeySecret,
    bucket: 'test-bucket-abhik',
    region: 'oss-ap-south-1'
})


exports.listBuckets = async function(req,res) {
    try {
      var result = await client.listBuckets();
    } catch(err) {
      console.log(err)
    }
    console.log(result.buckets)
    res.render('main', {layout: 'index', buckets: result.buckets,})
};

exports.getImage = async function(req,res) {
    try {
      var result = await client.listBuckets();
    } catch(err) {
      console.log(err)
    }
    console.log(result.buckets)
    res.render('main', {layout: 'index',  image:true})
};
          