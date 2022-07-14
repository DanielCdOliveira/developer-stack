import { Answer}  from "@prisma/client"
import * as answerRepository from "../repositories/answerRepository.js"

export type CreateAnswerData = Omit<Answer,"id">

export async function createAnswer(answer: CreateAnswerData) {
    await answerRepository.createAnswer(answer)
}




