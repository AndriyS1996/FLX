
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.delete('/', function(req, res) {
  if (req.headers.authorization !== "X-Password qwerty") {
    res.status(401).json({ error: 'Unauthorized!' });
  }
});

app.post('/car', function(req, res){
  let carData = req.body;
  carData["engineVolume"] = parseFloat(carData["engineVolume"]);
  carData["year"] = parseFloat(carData["year"]);
  let cars = JSON.parse(fs.readFileSync('db/data.json', 'utf-8'));
  let isCarInDb = false;
  cars.forEach( (car) => {
    let counter = 0;
    for (const key in car) {
      if ( key !== "id") {
        if (car[key] === carData[key]) {
          counter++;
        }
      }
    }
    if (counter === 4) {
      isCarInDb = true;
    };
  });
  if (isCarInDb) {
    res.statusMessage = 'Car already exists';
    res.status(409).end();
  } else {
    carData["id"] = cars[cars.length - 1]["id"] + 1;
    cars[cars.length] = carData;
    fs.writeFileSync('db/data.json', JSON.stringify(cars));
    res.status(201).send(JSON.stringify(carData));
    res.end();
  }
})

app.get('/car', function(req, res){
  let data = fs.readFileSync('db/data.json');
  res.send(data);
  res.status(200);
  res.end();
});

  app.get('/car/:id', function(req, res){
    let cars = JSON.parse(fs.readFileSync('db/data.json', 'utf-8'));
    let id = req.params.id;
    let car = cars.filter((car) => car["id"] === parseFloat(id));
    if (car[0]){
      res.send(car[0]);
      res.status(200);
    } else {
      res.status(404);
    }
  })
  app.put('/car/:id',function(req, res){
    let cars = JSON.parse(fs.readFileSync('db/data.json', 'utf-8'));
    let id = req.params.id;
    let index;
    let auto = cars.filter((car, i) => {
      if (car["id"] === parseFloat(id)) {
        index = i;
        return true
      }
    });
    let car = auto[0];
    if (car){
      car["brand"] = req.body["brand"];
      car["model"] = req.body["model"];
      car["engineVolume"] = req.body["engineVolume"];
      car["year"] = req.body["year"];
      cars[index] = car;
      fs.writeFileSync('db/data.json', JSON.stringify(cars));
      res.send(car);
      res.status(200);
    } else {
      res.status(404);
    }
  })
app.delete('/car/:id', function(req, res){
    let cars = JSON.parse(fs.readFileSync('db/data.json', 'utf-8'));
    let id = req.params.id;
    let isCarInDb = false;
    cars = cars.filter((car) => {
      if (car["id"] === parseFloat(id)){
        isCarInDb = true;
        return false
      } else {
        return true
      };
    });

    if (isCarInDb){
      fs.writeFileSync('db/data.json', JSON.stringify(cars));
      res.body.message = "The car has been successfully removed";
      res.status(200);
    } else {
      res.status(404);
    }
  });

app.listen(port);