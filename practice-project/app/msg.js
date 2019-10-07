const validator = require('validator')
const chalk = require ('chalk')
const printMsg = () => {
    return "Hello World"
}
module.exports = printMsg

const myEmail = "ahmad.ishtiaq990@gmail.com"

console.log (validator.isEmail(myEmail))



console.log(chalk.bgCyanBright.bold.white.inverse ("Hi there again"))

