import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

public cities = ['Warszawa', 'Gdańsk', 'Kraków', 'Paryż', 'Londyn', 'Rzym', 'Nowy Jork', 'San Francisco', 'Chicago'];

public arrivalCity = '';
public departureCity = '';

get departureCities(): Array<string> {
  return this.cities.filter(city => city !== this.arrivalCity);
}

get arrivalCities(): Array<string> {
  return this.cities.filter(city => city !== this.departureCity);
}

public countryDeparture = '';
public countryArrival = '';
public dateDeparture = '';
public dateArrival = '';
public numbersPassengers = '';
public numbersSeniors = '';
public numbersChildren = '';

public today = new Date();
public tomorrow;
// public tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);

constructor(private router: Router) {}


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  this.tomorrow = this.dateDeparture;
  }
  showCountryDeparture(departureCountry){
    this.countryDeparture = departureCountry;
    localStorage.setItem('Wylot', this.countryDeparture);
  }

  showCountryArrival(departureArrival){
    this.countryArrival = departureArrival;
    localStorage.setItem('Przylot', this.countryArrival);
    // if (this.countryDeparture == this.countryArrival){
    //   alert("Uwaga! Wybrałeś dwa takie same lotniska. Dokonaj zmiany.")
    // }
    // else{console.log('Poprawne dane')}
  }

  showDateDeparture(departureDate){
    this.dateDeparture = departureDate;
    this.tomorrow = this.dateDeparture;
    localStorage.setItem('Data wylotu', this.dateDeparture);
  }

  showDateArrival(arrivalDate){
    this.dateArrival = arrivalDate;
    localStorage.setItem('Data powrotu', this.dateArrival);
  }

  showNumbersPassengers(passengersNumbers){
    this.numbersPassengers = passengersNumbers;
    localStorage.setItem('Liczba pasażerów', this.numbersPassengers);
  }

  showNumbersChildren(childrenNumbers){
    this.numbersChildren = childrenNumbers;
    localStorage.setItem('Dzieci', this.numbersChildren);
  }

  showNumbersSeniors(seniorsNumbers){
    this.numbersSeniors = seniorsNumbers;
    localStorage.setItem('Seniorzy', this.numbersSeniors);
  }

}
