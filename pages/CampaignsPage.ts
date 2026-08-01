// import { Page, expect } from '@playwright/test';

// export class CampaignsPage {

//   constructor(private page: Page) {}

//   async openCampaigns() {

//     await this.page.goto('https://app.beta.serri.co.in/campaigns');

//     await this.page.waitForLoadState('networkidle');

//     await expect(
//       this.page.getByRole('tab', { name: /Broadcast/i })
//     ).toBeVisible();

//   }

//   async verifyCampaignPage() {

//     await expect(
//       this.page.getByRole('tab', { name: /Broadcast/i })
//     ).toBeVisible();

//   }

//   async openBroadcastTab() {

//     await this.page
//       .getByRole('tab', { name: /Broadcast/i })
//       .click();

//   }

//   async openScheduledTab() {

//     await this.page
//       .getByRole('tab', { name: /Scheduled/i })
//       .click();

//   }

// }



import { Page, expect } from '@playwright/test';


export class CampaignsPage {

    constructor(private page: Page) {}


    async openCampaigns() {

        await this.page.goto(
            'https://app.beta.serri.co.in/campaigns'
        );

        await this.page.waitForLoadState('networkidle');


        await expect(
            this.page.getByRole(
                'button',
                { name: 'New Campaign' }
            )
        ).toBeVisible();

    }



    async createBroadcastCampaign() {


        // Click New Campaign

        await this.page
            .getByRole(
                'button',
                { name: 'New Campaign' }
            )
            .click();



        // Select Broadcast Campaign

        await this.page
            .getByRole(
                'link',
                { name: /Broadcast Campaign/i }
            )
            .click();



        // Upload CSV

        await this.page
            .getByText(
                'Browse',
                { exact: true }
            )
            .click();



        await this.page
            .locator(
                'input[type="file"]'
            )
            .setInputFiles(
                'test-data/contacts.csv'
            );



        // Select field

        await this.page
            .getByRole(
                'button',
                { name: /Select a field/i }
            )
            .click();



        await this.page
            .getByText(
                'Phone Number',
                { exact: true }
            )
            .click();



        // Import contacts

        await this.page
            .getByRole(
                'button',
                { name: 'Import' }
            )
            .click();



        await expect(
            this.page.getByText(
                /contacts imported successfully/i
            )
        )
        .toBeVisible();



        // Next step

        await this.page
            .getByRole(
                'button',
                { name: /Confirm & next/i }
            )
            .click();



        // =========================
        // Select Account
        // =========================


        await this.page
            .getByRole(
                'button',
                {
                    name:'Select an account',
                    exact:true
                }
            )
            .click();



        await this.page
            .getByText(
                'rohitsmock test account',
                {
                    exact:false
                }
            )
            .click();



        // =========================
        // Select Template
        // =========================


        await this.page
            .getByRole(
                'button',
                {
                    name:/Select a template/i
                }
            )
            .click();



        await this.page
            .getByText(
                'UTILITY',
                {
                    exact:true
                }
            )
            .first()
            .click();



        await this.page
            .getByRole(
                'button',
                {
                    name:'Select Template',
                    exact:true
                }
            )
            .click();



        // =========================
        // Campaign Name
        // =========================


        const campaignName =
            `vedant_campaign_${Date.now()}`;



        await this.page
            .getByRole(
                'textbox',
                {
                    name:'Campaign Name'
                }
            )
            .fill(
                campaignName
            );



        // Send Campaign

        await this.page
            .getByRole(
                'button',
                {
                    name:'Send',
                    exact:true
                }
            )
            .click();



        return campaignName;

    }





    async verifyCampaignCreated(
        campaignName:string
    ) {


        await expect(

            this.page.getByText(
                campaignName
            )

        )
        .toBeVisible();


    }



}






