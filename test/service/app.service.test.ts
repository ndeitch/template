import { suite, test } from '@testdeck/jest'
import { AppService } from 'src/service'
import { BaseTest } from 'test/base-test'

@suite
export class AppServiceTest extends BaseTest {
  @test
  async 'Should return Hello World!'() {
    const service = super.get(AppService)

    const message = await service.getHello()

    expect(message).toBe('Hello World!')
  }
}
