import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './summary/summary.component';
import { SeatsComponent } from './seats/seats.component';
import { UsersService } from './login/users.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', redirectTo: '/flight', pathMatch: 'full'},
  {path: 'flight', component: FlightComponent },
  {path: 'login', component: LoginComponent },
  {path: 'seats', component: SeatsComponent },
  {path: 'details', component: DetailsComponent },
  {path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ReservationComponent,
    FlightComponent,
    LoginComponent,
    DetailsComponent,
    SummaryComponent,
    SeatsComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
