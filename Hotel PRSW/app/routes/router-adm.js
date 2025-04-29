const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("pages/index-adm");
});


module.exports = router