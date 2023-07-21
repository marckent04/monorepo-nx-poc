import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import {HttpService} from "@nestjs/axios";

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, {
        provide: HttpService,
        useValue: {
          get: jest.fn()
        }
      }],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
