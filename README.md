# Integrating with HubSpot I: Foundations - Practicum

## Index

1. Introduction
2. Overview of folder structure
3. URLs
4. Usage
5. Credits

## 1. Introduction

This is my practicum submission for the "Integrating with HubSpot I: Foundations" certification.

This README file will be updated regularly during the construction of this practicum.

## 2. Overview of folder structure

The folder structure has been changed slightly to conform more closely with a MVC architecture and more convetional setup of an Express application.  

Express Router has also been used for the application routes and an `.env` file was included for the declaration of the private access token and the default port number.  

Because of the use of a `.env` file the additional NPM package `dotenv` has been added as a dependency.  

The Express setup and app instantiation now take place in the `app.js` file in the root folder to separate it from the server setup and listening functionality in the `/bin/www.js` file.  

Finally, the type of the project has been specified as `module` to support the more modern ES6 import syntax.  

The new folder structure is:
- `bin/www.js` (The Express setup and listening functionality. Main entry point.)
- `controllers` (The controller functions for all the routes)
- `public/css` (All stylesheets; partials and main)
- `routes` (All three routes required for this practicum)
- `views` (The pug files for rendering)
- `.env` (Environmentals)
- `.gitignore`
- `app.js` (Express setup and application instantiation. Replaces index.js)
- `MY_README.md` (This file)
- `package.json`
- `package-lock.json`
- `README.md` (The original file with instructions)

## 3. URLs

[Developer account URL link](https://app-eu1.hubspot.com/developer/145236457)
[Test account custom objects URL link](https://app-eu1.hubspot.com/contacts/145259092/objects/2-132551664/views/all/list

## 4. Usage

- Download the code from the following GitHub repo [JohannJvanVuuren-iwh-i-practicum]()
- Run `npm intall` in the root folder
- Create a `.env` in the root folder with a valid private access token of an app in a HubSpot account and the `PORT=3000` line
- From the root folder type `npm run start`
