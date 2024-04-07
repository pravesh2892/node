const dbconnect = require('./mongodb')

const insert = async ()=>{
    let db = await dbconnect();
    const result = await db.insertMany(
        [
        { name: 'note 5', brand: 'vivio', price: 20000},
        { name: 'note 6', brand: 'vivio', price: 20000},
        { name: 'note 7', brand: 'vivio', price: 20000},

        ]
    )
    console.log(result)
}

insert();