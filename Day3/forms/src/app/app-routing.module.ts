import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { UserFromComponent } from './user-from/user-from.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"uform",component:UserFromComponent},
  {path:"userlist",component:UserComponent},
  {path:"register",component:ReactiveFormComponent},
  {path:"login",component:TemplateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
