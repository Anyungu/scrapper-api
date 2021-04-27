import routes from './controller/routes';

const countryService = (app, opts, next) => {
    app.register(routes);
    next();
};

export default countryService;
