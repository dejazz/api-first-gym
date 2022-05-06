import mongoose from "../database/index.js";

const UserSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
cpf:{
    type:String,
    required:true,
    unique:true,
    select:false,
},
email:{
    type:String,
    unique:true,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
    select:false,
},
avatarUrl:{
    type:String,
    required:true,
    default: "https://i.pinimg.com/280x280_RS/6a/45/af/6a45afa30247dad1fe7c6dfd8b3fb9fb.jpg",
},
createdAt:{
    type:String,
    default: Date.now,
},
updateAt:{
    type:String,
    default:null,
}
})

const User = mongoose.model("User",UserSchema)
export default User