const mongoose = require('mongoose');

const url = "mongodb+srv://rakchitseth:rakchitseth9696673056@cluster0.d7rtg1e.mongodb.net/cksewachikan?retryWrites=true&w=majority";
// console.log('some task');
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {

    console.log(err);
    
});

// setTimeout(()=>{console.log('after 1 seconds')},1000)
// console.log('some other task');

module.exports = mongoose;