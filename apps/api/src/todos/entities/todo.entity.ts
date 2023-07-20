import {Todo as TodoInterface } from "@lpi/common-types"
export class Todo implements TodoInterface {
  userId: number
  id: number
  title: string
  completed: boolean
}
