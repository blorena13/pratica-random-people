import httpStatus from "http-status";
import peopleService from "../services/people.services";
import { Request, Response } from "express";

async function getPeople(req : Request, res: Response){
    const people =  await peopleService.getPeople();
    res.send(people);
}

const peopleController = {
    getPeople
}

export default peopleController;