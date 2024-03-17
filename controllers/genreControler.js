const Book = require('../models/book')
const Genre= require('../models/genre')
const {body, validationResult}= require('express-validator')
const asyncHandler= require('express-async-handler')
exports.genre_list= asyncHandler(async (req,res,next)=> {
    const genreList= await Genre.find({})
    console.log(genreList)
    res.render("genre_list", {title: "Genre list", genre_list: genreList})
})
exports.genre_detail= asyncHandler(async (req,res,next)=> {
    const [genre, booksInGenre]= await Promise.all([
      Genre.findById(req.params.id),
      Book.find({genre: req.params.id})
    ])
    if (genre == null) {
      const err= new Error("genre not find")
      err.status= 404;
      return next(err)
    }
    res.render("genre_detail",
    {
      title: "Genre detail",
      genre: genre,
      genre_books: booksInGenre
    })




})
exports.genre_create_get= asyncHandler((req,res,next)=> {
    res.send('not implemented genre create get')
})
exports.genre_create_post= asyncHandler((req,res,next)=> {
    res.send('not implemnented genre create post')
})
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
  });
  
  // Handle Genre delete on POST.
  exports.genre_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
  });
  
  // Display Genre update form on GET.
  exports.genre_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
  });
  
  // Handle Genre update on POST.
  exports.genre_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
  });