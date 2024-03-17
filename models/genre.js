const mongoose= require("mongoose")
const { applyDefaults } = require("./author")
const Schema= mongoose.Schema
const GenreSchema= new Schema({
    name: {type:String, required: true},

})
GenreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`
})
module.exports= mongoose.model("Genre", GenreSchema)
