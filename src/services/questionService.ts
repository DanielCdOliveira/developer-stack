import {Question}  from "@prisma/client"

import * as questionRepository from "../repositories/questionRepository.js"

export type CreateQuestionData = Omit<Question,"id">

export async function createQuestion(question: CreateQuestionData) {
    await questionRepository.createQuestion(question)
}
export async function getAllQuestions() {
  return  await questionRepository.getAllQuestions()
}
export async function getQuestionById(id: number) {
    return  await questionRepository.getQuestionsById(id)
  }








