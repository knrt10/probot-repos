# probot-repos
Probot extension for events that don't exist

# What's its importance ?

Some github events like `installation` & `installation_repositories` does not work for probot's
`context.repo()` as they return **undefined** because in that case their payload does not store values for which **repository/repositories** were added. This is just a simple hack for helping developers using probot to avoid writing large amount of code. :smile: :fire:

# Installation

1.) Install using npm `npm i probot-repos --save`

# Usage

```js
const repos = require('probot-repos')
robot.on('installation', context => {
    repos(context).then((val) => {
      // val will return array of repositories added .
      [ { repo: 'Awesome-Hacking', owner: 'USERNAME' },
      { repo: 'autolabeler', owner: 'USERNAME' } ]
    })
})
```
