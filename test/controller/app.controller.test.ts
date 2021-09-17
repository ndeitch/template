import { suite, test } from '@testdeck/jest'
import { BaseTest } from 'test/base-test'

@suite
export class AppControllerTest extends BaseTest {
  @test
  async 'Should return Hello World!'() {
    const { status, text } = await this.request().get('').send()

    expect(status).toBe(200)
    expect(text).toBe('Hello World!')
  }
}
