import {Post as PostInterface } from "@lpi/common-types"
export class Post implements PostInterface {
  userId: number
  id: number
  title: string
  body:  string
}
