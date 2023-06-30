import configDatabase from "../database/database";

type Person = {
    id: number,
    firstName: string,
    lastName: string,
}


async function getpeopleRepository(id: number){
    const query = `SELECT * FROM people WHERE id=$1;`
    const result = await configDatabase.query<Person>(query, [id])
    
    return result.rows[0];
}

async function count(){
    const query = `SELECT COUNT(*) FROM people;`
    const result = await configDatabase.query(query);

    return result.rows[0].count;
}

const peopleRepository = {
    getpeopleRepository,
    count
}

export default peopleRepository;