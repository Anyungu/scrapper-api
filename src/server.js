import config from 'config';

import { fastify } from './app';

const port = config.get('port');

// Run the server!
const start = async () => {
    try {
        await fastify.listen(port || 8120);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
