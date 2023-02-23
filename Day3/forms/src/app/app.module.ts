import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserComponent } from './user/user.component';
import { UserFromComponent } from './user-from/user-from.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { FormatPipe } from './customepipesbyme/format';
import { MytitlePipe } from './customepipesbyme/mytitle.pipe';
import { TrackbyComponent } from './trackby/trackby.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';
import { IfDirective } from './if.directive';
import { IfdirectiveuseComponent } from './ifdirectiveuse/ifdirectiveuse.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    UserComponent,
    UserFromComponent,
    UserDetailsComponent,
    PipesComponent,
    CustomPipeComponent,
    FormatPipe,
    MytitlePipe,
    TrackbyComponent,
    NgifComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    HighlightDirective,
    HoverDirective,
    IfDirective,
    IfdirectiveuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
