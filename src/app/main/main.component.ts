import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public hidden = {display: "none"};

  constructor() { }

  ngOnInit(): void {
  }

  showPopup(){
    this.hidden = {display: "flex"};
  }
  close(){
    this.hidden = {display: "none"};
  }
}
