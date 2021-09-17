import { Logger, Module, OnApplicationShutdown } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongoClient } from 'mongodb'
import { AppController } from 'src/controller'
import { AppRepository } from 'src/repository'
import { AppService } from 'src/service'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    AppService,
    AppRepository,
    {
      provide: MongoClient,
      useFactory: async (configService: ConfigService) =>
        MongoClient.connect(configService.get('MONGO_CONNECTION_URI'), {
          useUnifiedTopology: true,
        }),
      inject: [ConfigService],
    },
  ],
})
export class AppModule implements OnApplicationShutdown {
  constructor(private readonly mongoClient: MongoClient) {}

  async onApplicationShutdown(signal?: string): Promise<void> {
    Logger.debug(`Application received shutdown with signal: ${signal}`, AppModule.name)

    if (this.mongoClient?.isConnected()) await this.mongoClient.close()

    Logger.debug('Connection with MongoDb closed. ', AppModule.name)
  }
}
