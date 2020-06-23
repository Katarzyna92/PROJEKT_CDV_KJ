import { Component, OnInit, Input } from '@angular/core';


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
public showOption;


constructor(){}

ngOnInit(): void {}

complete(){
  this.lastName = localStorage.getItem("Nazwisko");
  this.firstName = localStorage.getItem("Imię");
  this.addressName = localStorage.getItem("Adres");
  this.luggageValue = localStorage.getItem("Bagaż");
  this.discountChildrenValue = localStorage.getItem("Zniżka dla dziecka");
  this.discountSeniorsValue = localStorage.getItem("Zniżka dla seniora");
  this.countryDeparture =  localStorage.getItem("Wylot");
  this.countryArrival =  localStorage.getItem("Przylot");
  this.dateDeparture = localStorage.getItem("Data wylotu");
  this.dateArrival = localStorage.getItem("Data powrotu");
  this.numbersPassengers = localStorage.getItem("Liczba pasażerów");
  this.flightType = localStorage.getItem("Typ lotu");
  this.priceFlight = localStorage.getItem("Cena lotu");
  this.numbersChildren = localStorage.getItem("Dzieci");
  this.numbersSeniors = localStorage.getItem("Seniorzy");
  this.price = (this.numbersPassengers * this.priceFlight) - ((this.numbersChildren * this.priceFlight * this.discountChildrenValue *  0.001)+(this.numbersSeniors * this.priceFlight * this.discountSeniorsValue * 0.001)) + (this.luggageValue * 1);
}

checkPrice(value){
this.value = value;
console.log(this.value);

if (value == "eur"){
this.showOption = this.price * (4.46);
}
else if (value == "chf"){
this.showOption = this.price * (4.19);
}
else{
this.showOption = this.price * (3.99);
}
}

}
