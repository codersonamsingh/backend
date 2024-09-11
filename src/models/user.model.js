import mongoose , {Schema} from "mongoose";

const userSchema = new Schema ({
     username: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
        index: true
     },

     email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
       
     },

})


export const User = mongoose.model("User", userSchema)
