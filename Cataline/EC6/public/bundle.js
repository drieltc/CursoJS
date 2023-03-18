"use strict";

var cars = ['fusca', 'civic', 'hb20'];
var hasFucas = cars.some(function (car) {
  return car === 'fusca';
});
var hasBmw = cars.some(function (car) {
  return car === 'bmw';
});
console.log(hasFucas, hasBmw);
