const getDocPath = require('./getDocPath')
module.exports = {
  '/docs/KChat': [getDocPath('KChat', false, '/docs/KChat/')],
  '/study/Hive-note': [getDocPath('Hive学习笔记', false, '/study/Hive-note/')],
  '/study/SpringBoot2': [
    getDocPath('SpringBoot2学习笔记', false, '/study/SpringBoot2-note/')
  ]
}
