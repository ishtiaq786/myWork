const mongoose = require('mongoose')
const validator = require('validator')

const Profiles = mongoose.model('Profiles', {
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 0,
        validate (value) {
            if (value < 0){
            throw new Error ("Age cannot be negative")
            }
        }    

    },
    graduate: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error ("Expevted correct email")
            }
        }

    }

})

module.exports = Profiles