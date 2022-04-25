# Node.js Backend Task

## How to build and run this project

* Install using Docker Compose [**Recommended Method**] 
    * Clone this repo.
    * Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
    * Execute `docker-compose up -d` in terminal from the repo directory.
    * You will be able to access the api from http://localhost:3000
    * *If having any issue* then make sure 3000 port is not occupied else provide a different port in **.env** file.
    * *If having any issue* then make sure 27017 port is not occupied else provide a different port in **.env** file.
 * Run The Tests
    * Install node.js and npm on your local machine.
    * From the root of the project executes in terminal `npm install`.
    * To run the tests execute `npm test`.
 * Install Without Docker [**2nd Method**]
    * Install MongoDB on your local.
    * Do steps 1 to 3 as listed for **Run The Tests**.
    * Create users in MongoDB and seed the data taking reference from the **addons/init-mongo.js**
    * Execute `npm start` and You will be able to access the API from http://localhost:3000
    * To run the tests execute `npm test`.
 