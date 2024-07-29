const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: '127.0.0.1',
        "routes": {
            "cors": true
            // {
            //     'origin': ['*'], // Mengizinkan semua origin
            //     'additionalHeaders': ['cache-control', 'x-requested-with'],
            //     'credentials': true, // Mengizinkan cookies
            //     'exposedHeaders': ['Content-Type', 'Authorization']
            // }
        }
    });

    server.route(routes);

    await server.start();

    console.log(server.info.uri);
};

init();
