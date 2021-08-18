const {Schema, model} = require('mongoose');
const bcrypt =  require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.method.matchPassword = function(password) {
    await bcrypt.compare(password, this.password)
};

model.export = model('User', UserSchema);