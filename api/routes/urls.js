const express = require('express');
const router= express.Router();

const validurl = require('valid-url');
const Url = require('../models/Url');
const generatetoken =require('../utils/token');

// @route /api/shorturl/new
// @desc shorten url
// @access public
router.post('/new',(req,res)=>{
    if(validurl.isWebUri(req.body.url))
    {
        const original = req.body.url;
        Url.findOne({url:original},(err,data)=>
        {
            if(data)
            {
                res.json({original_url:data.url,short_url:data._id})
            }
            else{
                const tosave = new Url({url:original})

                tosave.save()
                    .then((result)=>{
                        res.json({original_url:result.url,short_url:result._id})
                    })
                    .catch(err=>console.log(err));
            }
        });
        
    }
    else{
        res.status(401).json({Error : "INVALID URL"});
    }
    
    

        //TODO cheack if url is valid
      
    //TODO check if it exist
    // TODO ADD TO DB
    //TODO THEN CONVERT DB ID TO BASE 62
    //TODO RETURN RESPONSE CONTAINING HASHED VERSION



});

// @route /api/shorturl/es.json({message:"get works"})
// @desc redirect to url
// @access public

router.get('/:shorturl',(req,res,next)=>
{
    //TODO  cheeck the db
    //TODO REDIRECT TO LINK
    const shorturl =req.params.shorturl;
    Url.findOne({_id:shorturl},(err,result)=>{
        if (result)
        {
            res.redirect(result.url);
        }
        else {
            res.send('NOT FOUND');
        }
    })
        

})

module.exports = router