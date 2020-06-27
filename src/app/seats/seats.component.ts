import { Component, OnInit, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { seatsArray } from './seats';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit,  AfterViewInit {


public flightType = '';

public bombardier = {display: "none"};
public boeing737 = {display: "none"};
public boeing787 = {display: "none"};


public popup = false;

public priceFlight = '';

public numbersPassenger;
public arrayNew: Array<string> = [];

public hidden = {display: "none"};

public readonly maxSeats = 9;
// public readonly maxSeats = this.numbersPassenger;

@ViewChild('num', {static: false})
public num: ElementRef;

  constructor() { }

  // if static true
  ngOnInit(): void {
    // for (var i = 0; i < seatsArray.length; i++) {
    //   document.getElementById(seatsArray[i]).setAttribute('class', 'free');
    // }
    // this.checkSeats();
  }

 // if static false
  ngAfterViewInit(): void {
    for (var i = 0; i < seatsArray.length; i++) {
      document.getElementById(seatsArray[i]).setAttribute('class', 'free');
    }
    this.checkSeats();
  }

showFlightType(typeFlight){
this.priceFlight = typeFlight;
localStorage.setItem('Typ lotu', this.flightType);
localStorage.setItem('Cena lotu', this.priceFlight);

if (typeFlight == '1000'){
    this.bombardier = {display: 'block'};
    this.boeing737 = {display: 'none'};
    this.boeing787 = {display: 'none'};
    this.flightType = 'Bombardier';
    this.num.nativeElement.innerHTML = '';
  }
else if (typeFlight == '2000'){
    this.boeing737 = {display: 'block'};
    this.bombardier = {display: 'none'};
    this.boeing787 = {display: 'none'};
    this.flightType = 'Boeing 737';
    this.num.nativeElement.innerHTML = '';
  }
else{
    this.boeing787 = {display: 'block'};
    this.bombardier = {display: 'none'};
    this.boeing737 = {display: 'none'};
    this.flightType = 'Boeing 787';
    this.num.nativeElement.innerHTML = '';
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
