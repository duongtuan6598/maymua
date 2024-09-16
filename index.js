const app = {
  cars: [],
  add(car) {
    this.cars.push(car)
  },
  edit(index, car) {
    this.cars[index] = car
  },
  delete(index, car) {
    this.cars.splices(index, 1)
  }
}
