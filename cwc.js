let program = require('commander')
let package = require('./package.json')

program
    .version(package.version)
    .usage('<command> [options]')

program
    .command('init')
    .description('在当前目录下创建webpack配置')
    .alias('i')
    .action(function() {
        console.log('init')
    })

program
    .command('remove')
    .description('移除当前目录下的webpack配置')
    .alias('rm')
    .action(function() {
        console.log('rm')
    })

program.parse(process.argv)
if(program.args.length === 0) {
    program.help()
}