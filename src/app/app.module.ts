import { NgModule } from '@angular/core';
import { InvestmentResults } from './investment-results/investment-results';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, Header, InvestmentResults],
  imports: [UserInputModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
