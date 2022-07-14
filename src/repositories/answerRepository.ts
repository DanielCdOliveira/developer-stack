import{prisma} from "../config/database.js"
import { CreateAnswerData } from "../services/answerService.js"

export async function createAnswer(answer: CreateAnswerData) {
    await prisma.answer.create({data:answer})
}





