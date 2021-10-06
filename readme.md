
# CrossCom Assessment

## Configuration and Setup
``` 
$ npm install
$ cp .env.dist .env  (and update values)
```
# If MySQL does not exist on localhost then proceed to Docker

## Run schema creation and migrations

First create a schema, in our case let's use `crosscom`, then:

``` 
$ npm run db:migrate
```

## Start application on localhost and run the test route for a json response
``` 
$ npm run dev
$ GET http://localhost:3000/api
```

## Application Routes
``` 
$ GET http://localhost:3000/api
```

## Lint code with fix with changes
``` 
$ npm run lint --fix
```

## Lint code without fixes
``` 
$ npm run lint
```

## Run project with docker
Unfinished!
```
$ docker build . -t crosscom/node-web-app
$ docker run -p 8080:8080 -d crosscom/node-web-app
```
