import { INestApplication, Type } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
import * as supertest from 'supertest'
import { SuperTest } from 'supertest'

export abstract class BaseTest {
  private moduleRef: TestingModule
  private app: INestApplication
  protected server: any

  async before() {
    expect.hasAssertions()
    this.moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile()
    this.app = await this.moduleRef.createNestApplication().init()
    this.app.enableShutdownHooks()
  }

  get<TInput = any, TResult = TInput>(type: Type<TInput> | string): TResult {
    return this.moduleRef.get(type)
  }

  request(): SuperTest<supertest.Test> {
    return supertest(this.app.getHttpServer())
  }
}
