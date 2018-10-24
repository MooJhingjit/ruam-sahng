
// only this level can call database directly
const index = () => {
  console.log('call index Core')
}

module.exports.index = index