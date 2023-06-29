import peopleRepository from "repositories/people.repository";

function getPeople(){
    const result = peopleRepository.getpeopleRepository();
    return result;
}

const peopleService = {
    getPeople
}

export default peopleService;