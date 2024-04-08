const dbconnect = require('./mongodb')

const deleteData = async()=>{
let data = await dbconnect();
let result = await data.deleteOne({name: 'note 6'})
console.log(result)
}

deleteData();