# CrossCom Assessment

## Configuration and Setup
``` 
$ npm install
$ cp .env.dist .env  (and update values)
```

## Start application on localhost and run the heart-beat test route for a json response
``` 
$ npm run dev
$ GET http://localhost:3000/api
```

## Application Routes
Find the postman export in the root of the project `crosscom.postman_collection.json`

- Return the time difference from the current time to tomorrow +24 hours
``` 
$ GET http://localhost:3000/api/tomorrows-offset
```

- Return the time difference from the current time from yesterday -24 hours
``` 
$ GET http://localhost:3000/api/yesterdays-offset
```

- Return the time difference from Friday of any date's calendar week
``` 
$ GET http://localhost:3000/api/fridays-date-from-calender-week-offset
```

- Return the time difference from the start of next week
``` 
$ GET http://localhost:3000/api/start-day-of-next-week-offset
```

- Return the time difference from the start of next month
``` 
$ GET http://localhost:3000/api/start-day-of-next-month-offset
```

- Return the time difference from the first day of any date's calendar week
``` 
$ GET http://localhost:3000/api/start-day-by-calendar-week-offset
```

- Return the time difference from an arbitrary future date/time
``` 
$ GET http://localhost:3000/api/future-date-time-offset
```

## Lint code with fix with changes
``` 
$ npm run lint --fix
```

## Lint code without fixes
``` 
$ npm run lint
```

## Create build for production
``` 
$ npm run lint
$ git fetch origin && git checkout . && git checkout master && git pull origin master && git checkout --detach && npm run build && git add dist/* --force && git commit -m v0.0.1 --no-verif && git tag -a v0.0.1 -m v0.0.1 && git push origin v0.0.1 
```

## Run project with docker
Unfinished!
```
$ docker build . -t crosscom/node-web-app
$ docker run -p 8080:8080 -d crosscom/node-web-app
```
