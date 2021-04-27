/* eslint-disable no-await-in-loop */
import { chromium } from 'playwright';
import fs from 'fs';

export const scrap = async () => {
    const browser = await chromium.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://www.mcc-mnc.com/');

    const trs = await page.$$('css=tbody>tr');

    const dataObject = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const tr of trs) {
        const tds = await tr.$$('css=td');

        const mccText = await tds[0].textContent();

        if (dataObject[mccText]) {
            const networkArray = dataObject[mccText].network;
            networkArray.push(await tds[5].textContent());
            const countryObject = {
                aliases: [await tds[3].textContent()],
                mcc: mccText,
                mnc: await tds[1].textContent(),
                iso: await tds[2].textContent(),
                country: await tds[3].textContent(),
                code: await tds[4].textContent(),
                network: networkArray,
            };
            dataObject[mccText] = countryObject;
        } else {
            const countryObject = {

                aliases: [await tds[3].textContent()],
                mcc: mccText,
                mnc: await tds[1].textContent(),
                iso: await tds[2].textContent(),
                country: await tds[3].textContent(),
                code: await tds[4].textContent(),
                network: [await tds[5].textContent()],

            };
            dataObject[mccText] = countryObject;
        }
    }

    // trs.forEach(async (tr) => {
    //     const tds = await tr.$$('css=td');

    //     const mccText = await tds[0].textContent();

    //     const countryObject = {
    //         mccText: {
    //             aliases: [await tds[3].textContent()],
    //             mcc: mccText,
    //             mnc: await tds[1].textContent(),
    //             iso: await tds[2].textContent(),
    //             country: await tds[3].textContent(),
    //             code: await tds[4].textContent(),
    //             network: await tds[5].textContent(),
    //         },
    //     };

    //     dataObject = { ...countryObject, ...dataObject };

    //     console.log(dataObject);
    // });

    // await browser.close();
    // console.log(dataObject);

    fs.writeFileSync('country.json', JSON.stringify(dataObject));
};
