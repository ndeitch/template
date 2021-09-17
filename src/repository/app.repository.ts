import { Injectable } from '@nestjs/common'
import { Collection, MongoClient } from 'mongodb'

@Injectable()
export class AppRepository {
  private readonly collection: Collection

  constructor(client: MongoClient) {
    this.collection = client.db('dev').collection('app')
  }

  async getHello(): Promise<string> {
    await this.collection.findOne({})

    return 'Hello World!'
  }
}
