// Require the framework and instantiate it
import Fastify from 'fastify';
import oas from 'fastify-oas';
import cors from 'fastify-cors';
import config from 'config';

import versionOneServices from './services/v1';

export const fastify = Fastify({
    // logger: {

    //     prettyPrint: true,
    // },
    logger: false,
});

fastify.register(cors, {
    // put your options here
});

const port = config.get('port');

fastify.register(oas, {
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Test openapi',
            description: 'Testing the fastify swagger api for chakula api',
            version: '0.1.0',
        },
        servers: [{
            url: `http://127.0.0.1:${port}`,
            description: 'Dev Server',
        }],
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
        },
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    exposeRoute: true,
});

fastify.register(versionOneServices, { prefix: '/v1' });
