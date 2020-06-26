import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {

public firstName = '';
public lastName = '';
public addressName = '';
public luggageValue = '';
public discountChildrenValue = '';
public discountSeniorsValue = '';


constructor( ){ }

  ngOnInit(): void {
  }

showFirstName(first){
  this.firstName = first;
  localStorage.setItem('Imię', this.firstName);
}

showLastName(last){
  this.lastName = last;
  localStorage.setItem('Nazwisko', this.lastName);
}

showAddress(address){
  this.addressName = address;
  localStorage.setItem('Adres', this.addressName);
}

showLuggage(luggage){
  this.luggageValue = luggage;
  localStorage.setItem('Bagaż', this.luggageValue);
}

showDiscountChildren(discount1){
  this.discountChildrenValue = discount1;
  localStorage.setItem('Zniżka dla dziecka', this.discountChildrenValue);
}

showDiscountSeniors(discount2){
  this.discountSeniorsValue = discount2;
  localStorage.setItem('Zniżka dla seniora', this.discountSeniorsValue);
}

}

