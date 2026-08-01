// import { Page, expect } from '@playwright/test';

// export class PeoplePage {
//   constructor(private page: Page) {}

//   async openPeople() {
//     await this.page.goto('https://app.beta.serri.co.in/people');

//     await this.page.waitForURL(/.*people/);

//     await expect(
//       this.page.getByRole('button', { name: /Add contact/i })
//     ).toBeVisible({ timeout: 30000 });
//   }

//   async createContact(name: string, phone: string, email: string) {

//     // Open Add Contact popup
//     await this.page.getByRole('button', { name: /Add contact/i }).click();

//     // Wait until popup is visible
//     await expect(
//       this.page.getByPlaceholder('e.g. Aditya Kumar')
//     ).toBeVisible({ timeout: 15000 });

//     // Fill Name
//     await this.page
//       .getByPlaceholder('e.g. Aditya Kumar')
//       .fill(name);

//     // Fill Phone
//     await this.page
//       .getByPlaceholder('43210')
//       .fill(phone);

//     // Fill Email
//     await this.page
//       .getByPlaceholder('name@email.com')
//       .fill(email);

//     // Click Create
//     const createBtn = this.page
//       .getByRole('button')
//       .filter({ hasText: /Create/i })
//       .first();

//     await expect(createBtn).toBeVisible({ timeout: 15000 });

//     await createBtn.click();

//     // Wait until popup closes
//     await expect(
//       this.page.getByPlaceholder('e.g. Aditya Kumar')
//     ).toBeHidden({ timeout: 15000 });
//   }

//   async searchContact(name: string) {

//     const searchBox = this.page.getByRole('searchbox').first();

//     await searchBox.fill(name);

//     await expect(
//       this.page.getByText(name)
//     ).toBeVisible({ timeout: 15000 });
//   }
// }






import { Page, expect } from '@playwright/test';


export class PeoplePage {

constructor(private page: Page){}



// OPEN PEOPLE PAGE

async openPeople(){

await this.page.goto(
'https://app.beta.serri.co.in/people'
);


await this.page.waitForLoadState('networkidle');


await expect(
this.page.getByRole('button',{
name:/Add contact/i
})
)
.toBeVisible({
timeout:30000
});

}




// CREATE CONTACT

async createContact(
name:string,
phone:string,
email:string
){


await this.page
.getByRole('button',{
name:/Add contact/i
})
.click();



await expect(
this.page.getByPlaceholder(
'e.g. Aditya Kumar'
)
)
.toBeVisible({
timeout:15000
});



await this.page
.getByPlaceholder(
'e.g. Aditya Kumar'
)
.fill(name);



await this.page
.getByPlaceholder(
'43210'
)
.fill(phone);



await this.page
.getByPlaceholder(
'name@email.com'
)
.fill(email);



await this.page
.getByRole('button')
.filter({
hasText:/Create/i
})
.first()
.click();



await expect(
this.page.getByPlaceholder(
'e.g. Aditya Kumar'
)
)
.toBeHidden({
timeout:15000
});



}



// SEARCH CONTACT

async searchContact(name:string){


const searchBox =
this.page.getByRole('searchbox');



await expect(searchBox)
.toBeVisible({
timeout:15000
});



await searchBox.fill(name);



await this.page.waitForTimeout(3000);



await expect(
this.page.getByText(name)
.first()
)
.toBeVisible({
timeout:15000
});


}


}