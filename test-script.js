strs = ["flower", "flow", "flight"]
prefix = ""
for (let i = 0; i < strs[0].length; i++) {
  let testPrefix = prefix + strs[0].charAt(i)
  let checkStr = strs.find(str => {
    if (str.substring(0, testPrefix.length) !== testPrefix) {
      return true
    } else {
      return false
    }
  }
  )
  if (checkStr) break;
  prefix = testPrefix
}
console.log(prefix)
