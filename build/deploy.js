const path = require('path'),
  FtpDeploy = require('ftp-deploy');

// validate
if (!process.env.TRAVIS) {
  console.log('Deploying is only available on Travis CI');
  process.exit();
}
if (process.env.TRAVIS_PULL_REQUEST !== 'false') {
  console.log('Deploying is not available in pull requests');
  process.exit();
}
if (process.env.TRAVIS_BRANCH !== 'master') {
  console.log('Deploying is only available for commits on master');
  process.exit();
}

new FtpDeploy().deploy({
  username: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  localRoot: path.join(__dirname, 'library/'),
  remoteRoot: '/httpdocs/'
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Deployment finished');
  }
});
