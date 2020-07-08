import { Component, OnInit, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { seatsArray } from './seats';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit,  AfterViewInit {


public flightType = '';

public bombardier = {display: 'none'};
public boeing737 = {display: 'none'};
public boeing787 = {display: 'none'};

public popup = false;

public priceFlight;

public numbersPassenger;

public arrayNew: Array<string> = [];

public hidden = {display: 'none'};

public countryDeparture;
public countryArrival;

public  maxSeats;
// public readonly maxSeats = 9;

@ViewChild('num', {static: false})
public num: ElementRef;

  constructor() { }

  // if static true
  ngOnInit(): void {

  }

 // if static false
  ngAfterViewInit(): void {
    for (var i = 0; i < seatsArray.length; i++) {
      document.getElementById(seatsArray[i]).setAttribute('class', 'free');
    }
    this.checkSeats();

    this.maxSeats = (localStorage.getItem('Liczba pasażerów'));
    // console.log(this.maxSeats);
    this.countryDeparture = localStorage.getItem('Wylot');
    // console.log(this.countryDeparture);
    this.countryArrival = localStorage.getItem('Przylot');
    // console.log(this.countryArrival);
  }

showFlightType(){

  let that = this;

  if (that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Warszawa' || that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Kraków' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Gdańsk' ||  that.countryDeparture == 'Warszawa' && that.countryArrival == 'Kraków' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Warszawa' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Gdańsk')
  {
      this.bombardier = {display: 'block'};
      this.boeing737 = {display: 'none'};
      this.boeing787 = {display: 'none'};
      this.flightType = 'Bombardier';
      localStorage.setItem('Typ lotu', this.flightType);
      this.priceFlight = 1000;
      localStorage.setItem('Cena lotu', this.priceFlight);
      this.num.nativeElement.innerHTML = '';
      this.hidden = {display: 'block'};
    }
  else if (that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Paryż' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Paryż' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Londyn' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Londyn' && that.countryArrival == 'Rzym' ||  that.countryDeparture == 'Rzym' && that.countryArrival == 'Paryż' || that.countryDeparture =='Rzym' && that.countryArrival == 'Londyn' || that.countryDeparture =='Rzym' && that.countryArrival == 'Gdańsk' || that.countryDeparture =='Rzym' && that.countryArrival == 'Warszawa' || that.countryDeparture =='Rzym' && that.countryArrival == 'Kraków' || that.countryDeparture =='Londyn' && that.countryArrival == 'Gdańsk' || that.countryDeparture =='Londyn' && that.countryArrival == 'Warszawa' || that.countryDeparture =='Londyn' && that.countryArrival == 'Kraków' || that.countryDeparture =='Paryż' && that.countryArrival == 'Gdańsk' || that.countryDeparture =='Paryż' && that.countryArrival == 'Warszawa' || that.countryDeparture =='Paryż' && that.countryArrival == 'Kraków')
  {
      this.boeing737 = {display: 'block'};
      this.bombardier = {display: 'none'};
      this.boeing787 = {display: 'none'};
      this.flightType = 'Boeing 737';
      localStorage.setItem('Typ lotu', this.flightType);
      this.priceFlight = 2000;
      localStorage.setItem('Cena lotu', this.priceFlight);
      this.num.nativeElement.innerHTML = '';
      this.hidden = {display: 'block'};
    }
  else if (that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Gdańsk' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Gdańsk' && that.countryArrival == 'Chicago' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Warszawa' && that.countryArrival == 'Chicago' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Kraków' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Kraków' && that.countryArrival == 'Chicago' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Gdańsk' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Warszawa' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Kraków' ||   that.countryDeparture == 'San Francisco' && that.countryArrival == 'Gdańsk' || that.countryDeparture == 'San Francisco' && that.countryArrival == 'Warszawa' || that.countryDeparture == 'San Francisco' && that.countryArrival == 'Kraków' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Gdańsk' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Warszawa' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Kraków' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Chicago' && that.countryArrival == 'Rzym' || that.countryDeparture == 'San Francisco' && that.countryArrival == 'Paryż' || that.countryDeparture == 'San Francisco' && that.countryArrival == 'Londyn' || that.countryDeparture == 'San Francisco' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Paryż' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Londyn' || that.countryDeparture == 'Nowy Jork' && that.countryArrival == 'Rzym' || that.countryDeparture == 'Paryż' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Paryż' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Paryż' && that.countryArrival == 'Chicago' ||   that.countryDeparture == 'Londyn' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Londyn' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Londyn' && that.countryArrival == 'Chicago' ||   that.countryDeparture == 'Rzym' && that.countryArrival == 'Nowy Jork' || that.countryDeparture == 'Rzym' && that.countryArrival == 'San Francisco' || that.countryDeparture == 'Rzym' && that.countryArrival == 'Chicago')
  {
      this.boeing787 = {display: 'block'};
      this.bombardier = {display: 'none'};
      this.boeing737 = {display: 'none'};
      this.flightType = 'Boeing 787';
      localStorage.setItem('Typ lotu', this.flightType);
      this.priceFlight = 3000;
      localStorage.setItem('Cena lotu', this.priceFlight);
      this.num.nativeElement.innerHTML = '';
      this.hidden = {display: 'block'};
    }
    else{
      alert("Nie wypełniono formularza!");
    }
  }

checkSeats(){
  let that = this;

  for (var i = 0; i < seatsArray.length; i++) {

    document.getElementById(seatsArray[i]).addEventListener('click', function() {

      if (that.arrayNew.length < that.maxSeats && document.getElementById(this.id).getAttribute('class') == 'free'){
      document.getElementById(this.id).removeAttribute('style');
      document.getElementById(this.id).setAttribute('class', 'occupied');
      that.arrayNew.push(this.id);
  }
  else{
    document.getElementById(this.id).removeAttribute('style');
    document.getElementById(this.id).setAttribute('class', 'free');
    that.arrayNew = that.arrayNew.filter(element => element !== this.id);
      }
      that.num.nativeElement.innerHTML = that.arrayNew.join(', ');
  });
}
}
showInformation(){
  this.hidden = {display: 'block'};
}
}
