const dbconnect = require('./mongodb')

const updateData =async ()=>{
 let data = await dbconnect();
let result = data.updateOne(
    {name: 'note 5'},
    {$set:{name: 'max-5'}}
    )
}

updateData();