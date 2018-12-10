const path = require('path')
const sao = require('sao')

describe('sao-tm', async () => {
  it('should not include React', async () => {
    const mockPromptAnswers = {
      name: 'foo',
    }
    const generator = path.join(__dirname, '..')
    const stream = await sao.mock({ generator }, mockPromptAnswers)

    expect(await stream.readFile('README.md')).toMatchSnapshot()
    expect(await stream.readFile('package.json')).toMatchSnapshot()
  })

  it('should include React', async () => {
    const mockPromptAnswers = {
      name: 'foo',
      isReact: true,
      isNode: false
    }
    const generator = path.join(__dirname, '..')
    const stream = await sao.mock({ generator }, mockPromptAnswers)

    expect(await stream.readFile('README.md')).toMatchSnapshot()
    expect(await stream.readFile('package.json')).toMatchSnapshot()
  })
})