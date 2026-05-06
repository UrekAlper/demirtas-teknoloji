module.exports = {
  apps: [{
    name: 'demirtas-teknoloji',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/demirtas-teknoloji',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
}
