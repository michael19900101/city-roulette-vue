module.exports = {
  apps: [{
    name: 'city-roulette',
    script: 'npx',
    args: 'serve dist -p 3000',
    cwd: process.cwd(),
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    merge_logs: true,
    min_uptime: '10s',
    max_restarts: 10,
    kill_timeout: 5000
  }]
};
