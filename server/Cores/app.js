
// only this level can call database directly
const index = () => {
  let app = {
    user: {
      id: 'xxx',
      name: 'xxxx',
    }
  }
  return {app}
}

module.exports.index = index