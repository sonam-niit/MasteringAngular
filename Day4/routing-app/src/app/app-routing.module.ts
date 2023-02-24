import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutchildAComponent } from './aboutchild-a/aboutchild-a.component';
import { AboutchildBComponent } from './aboutchild-b/aboutchild-b.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"userlist",component:UserslistComponent},
  {path:"userdetails/:id",component:UserdetailsComponent},
  {path:"about",component:AboutComponent,children:[
    {path:"",redirectTo:"childa",pathMatch:"full"},
    {path:'childa',component:AboutchildAComponent},
    {path:'childb',component:AboutchildBComponent}
  ]},
  {path:'details/:id',component:DetailsComponent},
  {matcher:(url)=>{
    if(url.length===1 && url[0].path.match(/^@[\w]+$/gm)){
      return{
        consumed:url,
        posParams:{
          username:new UrlSegment(url[0].path.substring(1),{})
        }
      }
    }
    return null;
  }, component:ProfileComponent},

  {path:"**",component:PagenotfoundComponent}//wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
