const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "teacher", "parent"],
    default: "parent",
  },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], // for parents
});


// Signup static method
UserSchema.statics.signup = async function ( email, password ,role) {
    // Validate fields
    if (!email || !password || !role) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough");
    }

    // Check if email already exists
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("Email already in use");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create and return user
    const user = await this.create({ email, password: hash ,role});
    return user;
};

// Login static method
UserSchema.statics.login = async function (email, password) {
    // Validate fields
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    // Find user by email
    const user = await this.findOne({ email });
    if (!user) {
        throw Error("User is not registered");
    }

    // Check if password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
};



module.exports = mongoose.model("User", UserSchema);
