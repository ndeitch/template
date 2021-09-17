import { suite, test } from '@testdeck/jest'
import { AppRepository } from 'src/repository'
import { BaseTest } from 'test/base-test'

@suite
export class AppRepositoryTest extends BaseTest {
  @test
  async 'Should return Hello World!'() {
    const repository = super.get(AppRepository)

    const message = await repository.getHello()

    expect(message).toBe('Hello World!')
  }
}
