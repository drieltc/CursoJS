const cars = ['fusca', 'civic', 'hb20']

const hasFucas = cars.some(function(car){
    return car === 'fusca'
})

const hasBmw = cars.some(function(car){
    return car === 'bmw'
})

console.log(hasFucas, hasBmw)