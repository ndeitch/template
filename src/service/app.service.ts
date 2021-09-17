import { Injectable } from '@nestjs/common'
import { AppRepository } from 'src/repository'

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getHello(): Promise<string> {
    return this.appRepository.getHello()
  }
}
