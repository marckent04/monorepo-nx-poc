import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import { map} from "rxjs";
import {Post} from "./entities/post.entity";

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpService) {}


  findAll() {
    return this.http.get<Post[]>('/').pipe(
      map(v => v.data)
    )
  }

  findOne(id: number) {
    return this.http.get<Post>(`/${id}`).pipe(
      map(v => v.data)
    )
  }
}
