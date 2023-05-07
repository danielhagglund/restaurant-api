# Restaurant API
This is a simple api that returns a random restaurant from a collection of restaurants. The API is built using Nestjs.

## Prerequisite
You need to install nodejs in order to build this projects.

## Run the api in your local development environment
To run the the api in your local development environment open a terminal and enter the command:
```
npm run start
```

### Get help
To get help you can call the baseurl http://localhost:3000 by curl:
```
curl http://localhost:3000
```

This will give you more information about what operations are possible.

### Get all restaurants
You get all restaurants by:
```
curl http://localhost:3000/restaurant
```

This will return a json object containing the list of restaurants.

### Pick a winner at random
To pick a winner at random:
```
curl http://localhost:3000/restaurant/winner
```

This will return the winning restaurant.

### Stop the api
To stop the api just press ctrl+c.

## Run the api in a Docker container
In order to run the api in a docker container you need to install Docker or Docker Desktop depending on your Operating System.

### Build the image
To build the image for the api just navigate to the root of the project where the Dockerfile is. Open a terminal and build the image using the following command:
```
docker build -t restaurant-api .
```
This will build the api application.

### Run the application in a container
To run the application enter the following command in the terminal:
```
docker run -p 3000:3000 restaurant-api
```

### Stop the application
The api can be stopped by pressing ctrl+c in the terminal or using docker stop command.