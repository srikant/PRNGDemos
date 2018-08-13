import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './carservice';
import { MessageService } from './messageservice';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
      const cars = [...this.cars];
      if (this.newCar) {
          cars.push(this.car);
      } else {
          cars[this.cars.indexOf(this.selectedCar)] = this.car;
      }

      this.cars = cars;
      this.car = null;
      this.displayDialog = false;
  }

  delete() {
      const index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i !== index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      // this.newCar = false;
      // this.car = this.cloneCar(event.data);
      // this.displayDialog = true;
      this.messageService.add({severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin});
  }

  onRowUnselect(event) {
    this.messageService.add({severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin});
}

  cloneCar(c: Car): Car {
      const car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

}
