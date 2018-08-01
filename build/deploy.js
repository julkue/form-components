const deploy = require('@julmot/git-branch-deploy');

deploy({
  branch: 'website',
  sourceDir: `${__dirname}/library/`,
  deployDir: `${__dirname}/deploy/`
});