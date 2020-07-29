// const {accessKeyID, accessKeySecret} = require('../../config/access_key.json')

const oss = require('ali-oss');
const client = oss({
    accessKeyId: accessKeyID,
    accessKeySecret: accessKeySecret,
    bucket: 'test-bucket-abhik',
    region: 'oss-ap-south-1'
})

//This controller is used to List the Buckets
exports.listBuckets = async function(req,res) {
    try {
      var result = await client.listBuckets();
    } catch(err) {
      console.log(err)
    }
    console.log(result.buckets)
    res.render('main', {layout: 'index', buckets: result.buckets,})
};

//This controller is used to Generate the Signed URL and then send it to the Template.
exports.getImage = async function(req,res) {
    try {

      //generating signed url
      thumbnail_url = client.signatureUrl('01_thumbnail.jpg', {
        expires: 3600 , // Time in Seconds to Expiry.
      })
      pic_url = client.signatureUrl('01.jpg', {
        expires: 3600 , // Time in Seconds to Expiry.
      })

    } catch(err) {
      console.log(err)
    }
    
    // console.log(thumbnail_url)
    res.render('main', {layout: 'index',  image: [{thumbnail_url, pic_url}]})
};
          