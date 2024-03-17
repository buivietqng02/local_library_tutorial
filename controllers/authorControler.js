const Author= require('../models/author')
const Book= require('../models/book')
const asyncHandler= require('express-async-handler')
exports.author_list= asyncHandler(async(req,res,next)=> {
    const allAuthor= await Author.find().sort({family_name: 1})
    res.render("author_list", {title: "Author list", author_list: allAuthor})



})
exports.author_detail= asyncHandler(async (req,res,next)=> {
   const [author, allBook]= await Promise.all([
    Author.findById(req.params.id),
    Book.find({author: req.params.id}, "title summary")
   ])
   if (author==null) {
    const err= new Error('not found author')
    err.status= 404
    next(err)
   }
   res.render("author_detail", {title: "Author detail" , author:author, allBook: allBook})



})
exports.author_create_get= asyncHandler((req, res, next)=> {
    res.send('not implemented; author create get')
})
exports.author_create_post= asyncHandler((req,res,next)=> {
    res.send('not implemented: author crewate post')
})
exports.author_delete_get= asyncHandler((req, res,next)=> {
    res.send('not implementrewd: author delete get')
})
exports.author_delete_post= asyncHandler((req,res,next)=> {
    res.send('not implemented: author delete post')
})
exports.author_update_get= asyncHandler((req,res,next)=> {
    res.send('not implemented author update get')
})
exports.author_update_post= asyncHandler((req,res,next)=> {
    res.send('not implemented author update post')
})