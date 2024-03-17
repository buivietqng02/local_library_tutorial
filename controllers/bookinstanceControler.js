const BookInstance= require('../models/bookinstance')
const asyncHandler= require('express-async-handler')
exports.bookinstance_list= asyncHandler(async (req,res,next)=> {
    const allBookInstances= await BookInstance.find({}).populate("book")

    res.render("book_instance_list", {title: "Book Instance list", book_instance_list: allBookInstances})


})
exports.bookinstance_detail= asyncHandler((req,res,next)=> {
    res.send('not implemented book instance detail')
})
exports.bookinstance_create_get= asyncHandler((req,res,next)=> {
    res.send('not implemented bookinstance create get')
})
exports.bookinstance_create_post= asyncHandler((req,res,next)=> {
    res.send('not implemented bookinstance post')
})
exports.bookinstance_delete_get= asyncHandler((req,res,next)=> {
    res.send('not implemnented bookinstance delete get')
})
exports.bookinstance_delete_post= asyncHandler((req,res, next)=> {
    res.send('not implemented bookinstance delete post')
})
exports.bookinstance_update_get= asyncHandler((req,res,next)=> {
    res.send('not implemented bookinstance update get')
})
exports.bookinstance_update_post= asyncHandler((req,res,next)=> {
    res.send('not implemented book instance update post')
})
