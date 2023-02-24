import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserformComponent } from './user/userform/userform.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { FormsModule } from '@angular/forms';
import { MylibModule } from 'mylib';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    UserlistComponent,
    UserdetailsComponent,
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
