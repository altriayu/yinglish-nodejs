# yinglish-nodejs

这是[GitHub - RimoChan/yinglish: 【yinglish】淫语翻译机！](https://github.com/RimoChan/yinglish)的nodejs版本实现，方便各位老色批在nodejs当中使用，感谢[RimoChan (黄巍) · GitHub](https://github.com/RimoChan)提供的如此有趣的灵感。

同时，还可以很方便的将文本文档，如txt自动翻译成淫语并保存哦！

## 例子

```javascript
import {transWordToYinglish, transFileAndSave} from 'yinglish-nodejs'

console.log(transWordToYinglish('嘉然小姐，你带我走吧！'))
//嘉然小姐……你带我走……走吧❤

console.log(transWordToYinglish('嘉然小姐，我好想做你的狗啊！',  0.8))
//嘉……嘉然小姐……我好想做你的狗……狗啊❤


transFileAndSave('./赛博英雄传.txt')
// 翻译成淫语之后保存在同文件夹的'赛博英雄传-yinglish.txt'内

```

## 接口说明

- transWordToYinglish（s, nastyDegree）
  - s: 需要翻译的字符串
  - nastyDegree： 淫乱度，代表每个词被翻译的概率
- transFileAndSave（path, nastyDegree)
  - path: 文件路径
  - nastyDegree：淫乱度，代表每个词被翻译的概率



## 安装

```bash
npm install yinglish-nodejs --save
```

