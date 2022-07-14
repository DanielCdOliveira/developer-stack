import { Request, Response } from "express";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const question = req.body
  await questionService.createQuestion(question) 
  res.sendStatus(201)
}

export async function answer(req: Request, res: Response) {
  const questionId = parseInt(req.params.id)
  const {answer} = req.body
  await answerService.createAnswer({questionId, answer})
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions()
  res.status(200).send(questions)
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id)
 const question = await questionService.getQuestionById(id)
 res.status(200).send(question)
}
