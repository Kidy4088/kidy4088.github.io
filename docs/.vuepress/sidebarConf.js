const getDocPath = require('./getDocPath')
module.exports = {
  '/docs/KChat': [getDocPath('KChat', false, '/docs/KChat/')],
  '/study/Hive': [getDocPath('Hive 学习笔记', false, '/study/Hive-note/')],
  '/study/SpringBoot2': [
    getDocPath('SpringBoot2 学习笔记', false, '/study/SpringBoot2-note/')
  ],
  '/study/Vert.x': [getDocPath('Vert.x 学习笔记', false, '/study/Vert.x-note/')]
}
