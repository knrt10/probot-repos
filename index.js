
/**
   * @event {installation}
   * @event {installation_repositories}
   * When Github app is installed first time or when any repository is added later.
  */

function repos (context) {
  const repoAddedId = context.payload.repositories_added || context.payload.repositories
  const repoAddedIds = []
  let repoInfo = {}
  const final = []

  // Looping through all ids and pushing it into an array

  repoAddedId.forEach((value) => {
    repoAddedIds.push(value.id)
  })

  // Get info for all repos

  const output = repoAddedIds.map(async (value) => {
    const result = await context.github.repos.getById({id: value})
    return Promise.all([result]).then(function (val) {
      val.forEach(outputData => {
        repoInfo = {
          repo: outputData.data.name,
          owner: outputData.data.owner.login
        }
        final.push(repoInfo)
      })
      return final
    })
  })
  return Promise.all(output).then(val => {
    return val[0]
  })
}

/**
   * @example
   * // output will return a Promise
   * const repoInfo = require('probot-repos')
   *
   * repoInfo(context).then((val)=>{ // promise is resolved
   *
   *   // output [ { repo: 'Awesome-Hacking', owner: 'USERNAME' },
   *      { repo: 'autolabeler', owner: 'USERNAME' } ]
   * })
  */

module.exports = repos
