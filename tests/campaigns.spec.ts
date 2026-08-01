// import { test } from '@playwright/test';

// import { LoginPage } from '../pages/LoginPage';
// import { CampaignsPage } from '../pages/CampaignsPage';

// import { EMAIL, PASSWORD } from '../utils/constants';

// test('Navigate Campaigns', async ({ page }) => {

//     const loginPage = new LoginPage(page);
//     const campaignsPage = new CampaignsPage(page);

//     await loginPage.login(EMAIL, PASSWORD);

//     await campaignsPage.openCampaigns();

//     await campaignsPage.verifyCampaignPage();

//     await campaignsPage.openBroadcastTab();

//     await campaignsPage.openScheduledTab();

// });






import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { CampaignsPage } from '../pages/CampaignsPage';

import {
    EMAIL,
    PASSWORD
} from '../utils/constants';



test(
'Create Broadcast Campaign',
async ({page})=>{


    const loginPage =
    new LoginPage(page);


    const campaignsPage =
    new CampaignsPage(page);



    await loginPage.login(
        EMAIL,
        PASSWORD
    );


    await campaignsPage.openCampaigns();


    const campaignName =
    await campaignsPage.createBroadcastCampaign();



    await campaignsPage.verifyCampaignCreated(
        campaignName
    );


});