import { Component, OnInit } from '@angular/core';


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
public showOption1;
public showOption2;
public showOption3;
public price1;
public price2;
public price3;

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
  this.numbersPassengers = localStorage.getItem('Liczba pasażerów');
  this.flightType = localStorage.getItem('Typ lotu');
  this.priceFlight = localStorage.getItem('Cena lotu');
  this.numbersChildren = localStorage.getItem('Dzieci');
  this.numbersSeniors = localStorage.getItem('Seniorzy');
  this.price = (this.numbersPassengers * this.priceFlight) - ((this.numbersChildren * this.priceFlight * this.discountChildrenValue *  0.001)+(this.numbersSeniors * this.priceFlight * this.discountSeniorsValue * 0.001)) + (this.luggageValue * 1);
}

checkPrice(value){

this.value = value;
console.log(this.value);

if (value == 'eur'){
this.showOption1 = this.price * (4.46);
this.showOption2 = '';
this.showOption3 = '';
}
else if (value == 'chf'){
this.showOption2 = this.price * (4.19);
this.showOption1 = '';
this.showOption3 = '';
}
else{
this.showOption3 = this.price * (3.99);
this.showOption1 = '';
this.showOption2 = '';
}
}

}

// fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json')

//   .then((resp) => resp.json())

//   .then(function (data) {
//     console.log(data.rates[0].mid);
//   })

//   //wykona się gdy błąd
//   .catch((error) => {
//     console.log('Błąd', error)
//   })

//   // finally wykona się zawsze czy dobrze czy zle mozna w ten sposob wyswietlic jakas wiadomosc
//   .finally(() => {
//     console.log('koniec')
//   });

// ///////////////////////////////////////////////////////////////////////////////////////////

// //wybór waluty

// const select = document.getElementById('my-select');
// const showOptions = document.getElementById('option-selected');
// const exchangeRate = document.getElementById('exchange-rate');

// select.addEventListener('change', function () {
//   // showOption.innerHTML = "Wybrałeś opcję" + document.getElementById("my-select").value
//   // to samo z this
//   showOptions.innerHTML = 'Wybrałeś walutę: ' + this.value;
// });

// // szczegóły waluty

// const currency = document.getElementById('currency');
// const showOption = document.getElementById('selected');
// const inputValue = document.getElementById('value');

// currency.addEventListener('change', function () {
// fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${this.value}/?format=json`)
// .then((resp) => resp.json())
// .then(function (data) {
// showOption.innerHTML = `Po przeliczeniu: ${(inputValue.value)*(data.rates[0].mid)} PLN`;
// })
// });
