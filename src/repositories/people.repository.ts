import { db } from "database/database"

function getpeopleRepository(){
    return db.query(
   `SELECT * FROM people;`
    )
}

const peopleRepository = {
    getpeopleRepository
}

export default peopleRepository;