import { getRandomInt } from "../helpers/utils";
import peopleRepository from "../repositories/people.repository";

async function getPeople(){
    const count = await peopleRepository.count();
    const randomId = getRandomInt(1, count);

    const result = await peopleRepository.getpeopleRepository(randomId);
    return result;
}

const peopleService = {
    getPeople
}

export default peopleService;