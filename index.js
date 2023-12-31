import { OpenAI } from "langchain/llms/openai"

import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

try {
  const result = await fetch('myinfo.txt')
  const text = await result.text()
  
  const splitter = new RecursiveCharacterTextSplitter()
  
  const output = await splitter.createDocuments([text])
  console.log(output)
} catch (err) {
  console.log(err)
}