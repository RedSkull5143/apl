const { log, error } = require('console')
const ar=require('./16a')

const radd=ar.add(5,10)
const rsub=ar.sub(5,10)
const rmul=ar.mul(5,10)

try{
    const rdiv=ar.div(5,10)
    console.log(radd);
    console.log(rsub);
    console.log(rmul);
    console.log(rdiv);
} catch(err){
    console.error("Error during division", err.message);
}
