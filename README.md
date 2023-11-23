# cypress + allure UI report

To setup depencies: ```npm i```
To run your tests: ```npx cypress run --env allure=true```
To make allure report: ```allure generate --clean | allure open```
You can combane these commands: ```npx cypress run --env allure=true | allure generate --clean | allure open```
