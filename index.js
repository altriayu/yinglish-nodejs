import jieba from 'nodejieba'

import fs from 'fs'
import path from 'path'

const transService = function (x, y, nastyDegree) {
  if (Math.random() > nastyDegree) return x
  if (x === ',' || x === '。' || x === '，') return '……'
  if (x === '!' || x === '！') return '❤'
  if (x.length > 1 && Math.random() < nastyDegree) {
    if (y === 'n') {
      x = x.split("").map(item => '〇').join('')
      return `……${x}`
    }
    return`${x[0]}...${x}`
  } else {
    return x
  }
}

export const transWordToYinglish = function (s, nastyDegree = 0.5) {
  const wordArr = jieba.tag(s)
  console.log(wordArr)
  return wordArr.map((item) => {
    return transService(item.word, item.tag, nastyDegree)
  }).join('')
}

export const transFileAndSave = function (filePath, nastyDegree = 0.5) {
  // console.log(fs.readFileSync(path).toString())
  let s = fs.readFileSync(filePath).toString()
  const wordArr = jieba.tag(s)
  let res =  wordArr.map((item) => {
    return transService(item.word, item.tag, nastyDegree)
  }).join('')
  fs.writeFile(`${path.dirname(filePath)}/${path.basename(filePath, path.extname(filePath))}-yinglish${path.extname(filePath)}`, res, (err) => {
    if (err) console.log(err)
    else console.log('淫语翻译成功！')
  })
}
