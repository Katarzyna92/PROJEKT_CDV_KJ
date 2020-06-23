import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  // public cities = ["Warszawa","Paryż","Londyn","Rzym","Nowy Jork","San Francisco","Chicago","Gdańsk","Kraków","Poznań"];

  // public opts = [
  //   {key: 'Warszawa', value: ["Warszawa, Paryż"]},
  //   {key: 'Paryż', value: ["Nowy Jork, Paryż"]},
  //   {key: 'Londyn', value: ["Rzym, Londyn"]},
  //   {key: 'Rzym', value: ["Paryż, Londyn"]},
  //   {key: 'Nowy Jork', value: ["Nowy Jork, Londyn"]},
  //   {key: 'San Francisco', value: ["Paryż, San Francisco"]},
  //   {key: 'Chicago', value: ["Rzym, Chicago"]},
  //   {key: 'Gdańsk', value: ["Kraków, Gdańsk"]},
  //   {key: 'Kraków', value: ["Warszawa,Kraków"]},
  //   {key: 'Poznań', value: ["Warszawa, Poznań"]},
  // ];

public countryDeparture = '';
public countryArrival = '';
public dateDeparture = '';
public dateArrival = '';
public numbersPassengers = '';
public numbersSeniors = '';
public numbersChildren = '';

public unsubscribe = {display: "none"};

public today = new Date();

constructor(private router: Router) {}


  // public i = 0;

  ngOnInit(): void {
    // this.i = 0;
  }

  showCountryDeparture(departureCountry){
    this.countryDeparture = departureCountry;
    localStorage.setItem("Wylot", this.countryDeparture);
  }

  showCountryArrival(departureArrival){
    this.countryArrival = departureArrival;
    localStorage.setItem("Przylot", this.countryArrival);
    if (this.countryDeparture == this.countryArrival){
      alert("Uwaga! Wybrałeś dwa takie same lotniska. Dokonaj zmiany.")
    }
    else{console.log('Poprawne dane')}
  }

  showDateDeparture(departureDate){
    this.dateDeparture = departureDate;
    localStorage.setItem("Data wylotu", this.dateDeparture);
  }

  showDateArrival(arrivalDate){
    this.dateArrival = arrivalDate;
    localStorage.setItem("Data powrotu", this.dateArrival);
  }

  showNumbersPassengers(passengersNumbers){
    this.numbersPassengers = passengersNumbers;
    localStorage.setItem("Liczba pasażerów", this.numbersPassengers);
  }

  showNumbersChildren(childrenNumbers){
    this.numbersChildren = childrenNumbers;
    localStorage.setItem("Dzieci", this.numbersChildren);
  }

  showNumbersSeniors(seniorsNumbers){
    this.numbersSeniors = seniorsNumbers;
    localStorage.setItem("Seniorzy", this.numbersSeniors);
  }

  showInformation(){
  this.unsubscribe = {display: "block"};
  }

  // counter(){
  //   console.log(this.i++);
  // }

}
