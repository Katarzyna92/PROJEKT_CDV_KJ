import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

public price;
public firstName;
public lastName;
public addressName;
public luggageValue;
public discountChildrenValue;
public discountSeniorsValue;
public countryDeparture;
public countryArrival;
public dateDeparture;
public dateArrival;
public numbersPassengers;
public numbersChildren;
public numbersSeniors;
public flightType;
public priceFlight;
public value;
public maxSeats;

@ViewChild('showOption', {static: false})
public num: ElementRef;

constructor(){}

ngOnInit(): void {
  this.complete();
}

complete(){

  this.lastName = localStorage.getItem('Nazwisko');
  this.firstName = localStorage.getItem('Imię');
  this.addressName = localStorage.getItem('Adres');
  this.luggageValue = localStorage.getItem('Bagaż');
  this.discountChildrenValue = localStorage.getItem('Zniżka dla dziecka');
  this.discountSeniorsValue = localStorage.getItem('Zniżka dla seniora');
  this.countryDeparture =  localStorage.getItem('Wylot');
  this.countryArrival =  localStorage.getItem('Przylot');
  this.dateDeparture = localStorage.getItem('Data wylotu');
  this.dateArrival = localStorage.getItem('Data powrotu');
  this.maxSeats = localStorage.getItem('Liczba pasażerów');
  this.flightType = localStorage.getItem('Typ lotu');
  this.priceFlight = localStorage.getItem('Cena lotu');
  this.numbersChildren = localStorage.getItem('Dzieci');
  this.numbersSeniors = localStorage.getItem('Seniorzy');
  this.price = (this.maxSeats * this.priceFlight) - ((this.numbersChildren * this.priceFlight * this.discountChildrenValue *  0.001)+(this.numbersSeniors * this.priceFlight * this.discountSeniorsValue * 0.001)) + (this.luggageValue * 1);
  // console.log(this.maxSeats);
  // console.log(this.priceFlight);
}

checkPrice(value){
let that = this;
this.value = value;

fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.value}/?format=json`)

  .then((resp) => resp.json())

  .then(function (data) {

    let converter = (data.rates[0].mid);

    // console.log(converter);
    // console.log(that.price);

    that.num.nativeElement.innerHTML = ( `${(that.price)*(converter)+(value)}`);
  })

}
}
