const plugin = require('..')

describe('repoInfo', () => {
  let context
  beforeEach(() => {
    context = {
      payload: JSON.parse(JSON.stringify(require('./installation.json')))
    }
  })

  it('get repo IDs', async () => {
    const a = plugin(context)
    expect(a).toBeDefined()
  })
})
