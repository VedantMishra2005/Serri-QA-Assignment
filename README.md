# Serri Tech Labs - QA Tester Intern Assignment

## Author

**Name:** Vedant Mishra


# Project Overview

This repository contains the Playwright automation test suite developed for the **Serri Tech Labs QA Tester Intern Hiring Assignment**.

The project automates important workflows of the **Zen Dashboard application** using **Playwright with TypeScript**.

The automation framework follows the **Page Object Model (POM)** approach to maintain clean, reusable, and scalable test code.


# Technology Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- Git


# Project Structure

```
serri-qa-assignment
│
├── pages
│   ├── LoginPage.ts
│   ├── PeoplePage.ts
│   ├── TemplatesPage.ts
│   └── CampaignsPage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── people.spec.ts
│   ├── templates.spec.ts
│   └── campaigns.spec.ts
│
├── test-data
│   └── contacts.csv
│
├── utils
│   └── constants.ts
│
├── screenshots
│   ├── test-result.png
│   └── playwright-report.png
│
├── .env.example
├── package.json
├── playwright.config.ts
└── README.md
```


# Automated Test Scenarios

## 1. Login Flow

Automated:

- Open Zen Dashboard
- Enter valid credentials
- Verify successful login


## 2. Contacts / People Module

Automated:

- Navigate to Contacts section
- Create a new contact
- Search contact
- Verify created contact


## 3. Templates Module

Automated:

- Navigate to Templates section
- Create template
- Search template
- Verify template creation


## 4. Campaign Module

Automated:

- Navigate to Campaigns section
- Create Broadcast Campaign
- Upload CSV contacts
- Map contact field
- Select account
- Select template
- Create campaign successfully


# Framework Features

- Page Object Model (POM) architecture
- Separate page classes for every module
- Reusable locators and functions
- Environment variable based configuration
- Dynamic test data generation
- Playwright assertions for validation


# Prerequisites

Required:

- Node.js (Latest LTS)
- npm
- Playwright


# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd serri-qa-assignment
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```


# Environment Setup

Create a `.env` file in the root directory.

Example:

```
BASE_URL=https://app.beta.serri.co.in/
EMAIL=your_email
PASSWORD=your_password
```


# Running Tests


## Run all test cases

```bash
npx playwright test
```


## Run tests with browser

```bash
npx playwright test --headed
```


## Run Login Test

```bash
npx playwright test tests/login.spec.ts
```


## Run Contacts Test

```bash
npx playwright test tests/people.spec.ts
```


## Run Templates Test

```bash
npx playwright test tests/templates.spec.ts
```


## Run Campaign Test

```bash
npx playwright test tests/campaigns.spec.ts
```


# Test Execution Result

All implemented automation test cases are passing successfully.


Command:

```bash
npx playwright test --headed
```


Result:

```
✓ Login Test

✓ Contacts Test

✓ Templates Test

✓ Campaign Test

4 passed
```


Screenshot:

![Test Execution Result](screenshots/test-result.png)


# HTML Report

Playwright HTML report can be generated using:

```bash
npx playwright show-report
```


Report Screenshot:

![Playwright Report](screenshots/playwright-report.png)


# Page Object Model Implementation

The project uses separate page classes:


### LoginPage.ts

Handles:

- Login actions
- Authentication validation


### PeoplePage.ts

Handles:

- Contact creation
- Contact search


### TemplatesPage.ts

Handles:

- Template creation
- Template search


### CampaignsPage.ts

Handles:

- Campaign creation workflow


# Test Data Management

- CSV file is used for contact import testing.
- Dynamic campaign and template names are generated.
- Credentials are managed using environment variables.


# Validation and Assertions

The framework validates:

- Successful login
- Contact creation
- Contact search result
- Template creation
- Campaign creation


# Notes

- Stable Playwright locators are used.
- Test scripts are separated from page actions.
- Code follows reusable automation practices.
- The framework is designed for easy maintenance and extension.


# Future Improvements

Possible enhancements:

- API testing integration
- CI/CD pipeline setup
- Cross-browser execution
- Advanced reporting
- Extended regression test suite


# Assignment Submission

This project is developed as part of the **Serri Tech Labs QA Tester Intern Hiring Assignment**.

The automation suite demonstrates end-to-end testing of core Zen Dashboard workflows using **Playwright and TypeScript**.
