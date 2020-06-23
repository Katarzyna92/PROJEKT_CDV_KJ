import { Component, OnInit } from '@angular/core';
import { seatsArray } from './seats';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {


public flightType = '';

public bombardier = {display: "none"};
public boeing737 = {display: "none"};
public boeing787 = {display: "none"};

public priceFlight = '';

public numbersPassenger;

;
// public free = "green";
// public occupied = "red";
// public free = {fill: "green"};
// public occupied = {fill: "red"};
// public occupied = false;
// public free = true;

  constructor() { }

  ngOnInit(): void {}

showFlightType(typeFlight){
this.priceFlight = typeFlight;
localStorage.setItem('Typ lotu', this.flightType);
localStorage.setItem('Cena lotu', this.priceFlight);

if (typeFlight == '1000'){
    this.bombardier = {display: 'block'};
    this.boeing737 = {display: 'none'};
    this.boeing787 = {display: 'none'};
    this.flightType = "Bombardier";
  }
else if (typeFlight == '2000'){
    this.boeing737 = {display: 'block'};
    this.bombardier = {display: 'none'};
    this.boeing787 = {display: 'none'};
    this.flightType = "Boeing 737";
  }
else{
    this.boeing787 = {display: 'block'};
    this.bombardier = {display: 'none'};
    this.boeing737 = {display: 'none'};
    this.flightType = "Boeing 787";
  }
}


checkSeats(){

  var arrayNew =[];
  var numbersMax = 9;
  // var numbersMax = this.numbersPassenger;



  for (var i = 0; i < seatsArray.length; i++) {

    document.getElementById(seatsArray[i]).addEventListener("click", function() {

      arrayNew.push(this.id);
      console.log(arrayNew);
      console.log(arrayNew.toString());

      if (document.getElementById(this.id).getAttribute("class") == "occupied"){
      document.getElementById(this.id).removeAttribute("style");
      document.getElementById(this.id).setAttribute("class", "free");

      document.getElementById("num").innerHTML = this.id;

      // document.getElementById("num").innerHTML = arrayNew.toString();

      // document.getElementById("num2").innerHTML = arrayNew[0].toString() + arrayNew[1].toString()+ arrayNew[2].toString()+ arrayNew[3].toString()+ arrayNew[4].toString()+ arrayNew[5].toString()+ arrayNew[6].toString()+ arrayNew[7].toString()+ arrayNew[8].toString();

  }
  else{
    document.getElementById(this.id).removeAttribute("style");
    document.getElementById(this.id).setAttribute("class", "occupied");
      }
  });
}
}

}
