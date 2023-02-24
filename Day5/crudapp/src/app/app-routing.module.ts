import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { UserformComponent } from './user/userform/userform.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [
  {path:"userlist",component:UserlistComponent},
  {path:"userform",component:UserformComponent},
  {path:"userdetails/:id",component:UserdetailsComponent},
  {path:"edituser/:id",component:UsereditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
