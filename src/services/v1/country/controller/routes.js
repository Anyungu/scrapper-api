import errorResponse from '../../utils/response.util';

import {
    getCountrySchema,
    createCountrySchema,
} from './schema';

import {
    createCountry,
    getCountry,
    scrapData,
} from '../resources';

function countryRoutes(app, opts, next) {
    app.setErrorHandler((error, request, reply) => {
        const { status, message } = errorResponse(error);
        reply.status(status).send({ status, message });
    });

    app.post('/country', { schema: createCountrySchema }, async (request, reply) => {
        const data = request.body;
        const result = await createCountry(data);

        reply.status(200).send({
            status: 200,
            data: result,
        });
    });

    app.get('/country', { schema: getCountrySchema }, async (request, reply) => {
        const data = request.query;
        const result = await getCountry(data);

        reply.status(200).send({
            status: 200,
            data: result,
        });
    });

    app.post('/scrap', async (request, reply) => {
        // const data = request.query;
        // const result = await getCountry(data);

        await scrapData();

        reply.status(200).send({
            status: 200,
            message: 'scrap complete',
            // data: result,
        });
    });

    next();
}

export default countryRoutes;
