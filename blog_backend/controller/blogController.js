const blogModel = require('../model/blogModel');

exports.addBlog= async(req,res)=>{
    console.log(req.body);

const new_blog= new blogModel(req.body)
const result=await new_blog.save()
res.status(200) .json(result)
}


exports.homeBlog = async(req,res)=>{
const data= await blogModel.find()
if (data != null) {
    res.status(200).json(data)
} else {
    res.status(400).json({'message':'no data'})
}
}

exports.showBlog = async(req,res)=>{
    const data = await blogModel.findById(req.params.id)
    if (data != null) {
            res.status(200).json(data)
    } else {
            res.status(400).json({'message':'no data'})

    }
}

exports.updateBlog = async(req,res)=>{
    const data = await blogModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).json({message:'update success'})
    
}

exports.deleteBlog = async(req,res)=>{
    console.log(req.params.id);
    const data = await blogModel.findByIdAndDelete(req.params.id)
     
     if (data != null) {
        res.status(200).json({ message: 'Blog deleted successfully...' })
    } else {
        res.status(404).json({ message: 'Blog not found...' })
    }
}


