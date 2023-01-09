module.exports = {
    apps: [
        {
            name: 'HTTP_API',
            namespace: 'backend',
            script: 'build/server.js',
            instances: 3,
            exec_mode: 'cluster',
            watch: false,
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],

    deploy: {
        develop: {
            user: 'anchori',
            host: 'aftermath.team',
            port: '8889',
            ref: 'origin/develop',
            repo: 'http://git.aftermath.team/AnchorI/evcar-node.git',
            path: '/evcar-node',
            'pre-deploy-local': '',
            'post-deploy':
                'yarn install && pm2 reload ecosystem.config.js --env development && pm2 save',
            'pre-setup': '',
        },
    },
}
