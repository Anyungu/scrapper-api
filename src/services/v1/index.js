import countryService from './country';

const versionOneServices = (app, opts, next) => {
    app.register(countryService);

    next();
};

export default versionOneServices;
