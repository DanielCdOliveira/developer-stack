import{prisma} from "../config/database.js"
import { CreateQuestionData } from "../services/questionService.js"

export async function createQuestion(question: CreateQuestionData) {
    await prisma.question.create({data:question})
}
export async function getAllQuestions() {
   return await prisma.question.findMany()
}
export async function getQuestionsById(id) {
    return await prisma.question.findUnique({
        where:{id},
        // select:{
        //     question:true,
        // Answer :{
        //     select:{
        //         answer:true
        //     }
        // }
        // }
        include:{
            Answer :{
                select:{
                    answer:true
                }
            }
        }
    })
 }
