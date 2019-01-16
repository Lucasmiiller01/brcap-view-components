import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
// import { CurrencyMaskModule } from "ng2-currency-mask";

import { FormsModule } from "@angular/forms";
import { BRCapModule } from "./modules/brcap.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    CommonModule, 
    FormsModule, 
    BRCapModule, 
    // CurrencyMaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
