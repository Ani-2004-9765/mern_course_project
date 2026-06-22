const express = require('express');
const { addBlog, homeBlog, updateBlog, deleteBlog, showBlog } = require('../controller/blogController');


const router=express.Router()

router.get("/",homeBlog);
router.get("/show/:id",showBlog)
router.post("/add",addBlog);
router.put("/edit/:id",updateBlog)
router.delete("/:id", deleteBlog);

module.exports=router