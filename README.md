
# Temper Tests Assessment

This project contains the files needed for running the tests for the
assessment from Temper using the Cypress framework.



## Authors

- [@erodm09](https://github.com/erodm09/)


## ⚙️ Setup and General information

💠 IDE used & setup 

[VS Code](https://code.visualstudio.com/download) with following extensions:
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Keeps the code organized
[Add Only](https://marketplace.visualstudio.com/items?itemName=ub1que.add-only) - enables to add/remove .only with one click

You need to have as well [Node.js](http://nodejs.org) installed

Clone the project necessary


  1.```git clone https://github.com/erodm09/TemperAssessment-.git```
  2.cd to ``` TemperAssessment- ``` folder and run ```npm install```


Go to the project directory if necessary

  cd ```https://github.com/erodm09/TemperAssessment-.git```

Install dependencies and Node modules necessary for Cypress

```bash
  npm install
```
In case of any missing or problems with node modules please run:

```Npm I --save-dev cypress@10.3.0```

✔️ Run tests

If you installed Cypress via ```npm```:
cypress test runner (cypress open):

```npm run cy:open:```
For cypress headless mode (cypress run):

```npm run cy:run``` OR  ```npx cypress open```

If you installed Cypress zip:
import ```TemperAssessment-``` folder and you are good to go

💡 Information

🧪 Tests:
📁 Tests are located in ```cypress/e2e``` folder

 🛠️Configuration

Config files:

```cypress.json``` -  config file where default behavior of Cypress can be modified.
```cypress.config.js```- Main config handling additional behaivour in Cypress, for example ```chromeWebSecurity: false``` for turning off the security for running tests in Chrome

