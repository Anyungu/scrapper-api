import createError from '../../../../utils/error.util';
import { scrap } from '../../../../utils/scrapper';

export const createCountry = async (data) => {
    const {
        name,
        location,
    } = data;

    console.log(name);

    console.log(location);

    if (false) {
        const error = createError('Already exists', 'Restaurant with that name already exists');
        throw error;
    }

    // write to file

    return data;
    // }
    // const error = createError('Already exists', 'Restaurant with that name already exists');
    // throw error;
};

export const getCountry = async ({ ...data }) => {
    // if (Object.keys(data).length === 0) {
    //     const fetchedRestaurant = await RestaurantModel.findAllRestaurants();
    //     return fetchedRestaurant;
    // }
    // const fetchedRestaurant = await RestaurantModel.findRestaurantByAttributes(data);
    console.log(data);
    return ([]);
};

export const scrapData = async () => {
    await scrap();
};
