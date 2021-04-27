export const getCountrySchema = {
    querystring: {
        type: 'object',
        properties: {
            mcc: {
                type: 'string',
            },
            country: {
                type: 'string',
            },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'number' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            mcc: {
                                type: 'string',
                            },

                            mnc: {
                                type: 'string',
                            },

                            iso: {
                                type: 'string',
                            },

                            country: {
                                type: 'string',
                            },

                            code: {
                                type: 'string',
                            },

                            network: {
                                type: 'string',
                            },
                        },
                    },

                },
            },
        },
    },
};

export const createCountrySchema = {
    body: {
        type: 'object',
        required: ['mcc', 'mnc', 'iso', 'country', 'code', 'network'],
        properties: {
            mcc: {
                type: 'string',
            },

            mnc: {
                type: 'string',
            },

            iso: {
                type: 'string',
            },

            country: {
                type: 'string',
            },

            code: {
                type: 'string',
            },

            network: {
                type: 'string',
            },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'number' },
                data: {
                    type: 'object',
                    properties: {
                        mcc: {
                            type: 'string',
                        },

                        mnc: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
};
