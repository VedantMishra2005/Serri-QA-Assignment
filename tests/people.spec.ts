// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { PeoplePage } from '../pages/PeoplePage';
// import { EMAIL, PASSWORD } from '../utils/constants';

// test('Create Contact', async ({ page }) => {

//   const loginPage = new LoginPage(page);
//   const peoplePage = new PeoplePage(page);

//   const unique = Date.now();

//   const name = `Vedant_Contact_${unique}`;
//   const phone = `98${unique.toString().slice(-8)}`;
//   const email = `vedant${unique}@gmail.com`;

//   await loginPage.login(EMAIL, PASSWORD);

//   await peoplePage.openPeople();

//   await peoplePage.createContact(name, phone, email);

//   await peoplePage.searchContact(name);

// });




import {test} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {PeoplePage} from '../pages/PeoplePage';

import {
EMAIL,
PASSWORD
}
from '../utils/constants';



test(
'Create and Search Contact',
async({page})=>{


const login =
new LoginPage(page);



const people =
new PeoplePage(page);



const id =
Date.now();



const name =
`Vedant_Test_${id}`;



const phone =
`98${id.toString().slice(-8)}`;



const email =
`vedant${id}@gmail.com`;




// LOGIN

await login.login(
EMAIL,
PASSWORD
);



// OPEN PEOPLE

await people.openPeople();



// CREATE CONTACT

await people.createContact(
name,
phone,
email
);



// SEARCH CONTACT

await people.searchContact(
name
);



});