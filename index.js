const spawn = require('child_process').spawn;
const pictureTube = require('picture-tube')
const chalk = require('chalk');
const tube = pictureTube({ cols: 48 });
tube.pipe(process.stdout);
const fs = require('fs');

module.exports = (args) => {
  fs.createReadStream(__dirname + '/ryan.png').pipe(tube);

  console.log(`You can do it ${process.env.USER || '' }!`);
  const cmd = `yarn ${args.join(' ')}`;
  console.log(chalk.white(cmd));
  spawn('yarn', args || ['help'], { stdio: 'inherit' });
}
