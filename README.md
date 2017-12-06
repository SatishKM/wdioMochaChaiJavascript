# WebDriver.io Project With Basic Framework

The tech stack used for the project are:
1. **Mocha** as testing framework for writing test's in BDD format.
2. **JavaScript** is the language used for writing test code.
3. **WebDriver.io** to drive browser interaction.
4. **Package.json** is used to store the dependencies. 
5. **IntelliJ Ultimate/WebStorm/Sublime** as the preferred IDE's for writing JavaScript code.

#### Getting Started
Setup your machine. 
1. Install NodeJs & NPM.
2. Install IntelliJ Ultimate/WebStorm (30 Days Trial Version) or we can use Sublime (It's a free version).

#### Cloning & Importing Project
Once above setup is done, Then follow this steps for cloning & importing
1. Checkout project from ```https://vinaykumarvvs@bitbucket.org/vinaykumarvvs/webdriver-mocha.git```
2. Import this project in any one of this IntelliJ/WebStorm/Sublime ```File -> Open -> Browse Project Location```
3. Open Terminal and move to the project location ```webdriver-mocha``` , now execute ```npm install``` (It will download the dependencies from package.json).
4. That's it, we are good to go.

#### Running tests
1. To run all tests (All Tests Present in Test Directory) ```npm run test```
2. To run only a specific test.js file (All Tests Present in the file) ```npm run login```
3. To run tests based on tags (Only Tagged Tests will run) ```npm run @sanity```
