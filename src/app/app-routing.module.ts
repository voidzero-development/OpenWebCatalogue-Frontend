import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { UserdetailComponent } from './components/userdetail/userdetail.component';

import { BookComponent } from './components/book/book.component';
import { BookoverviewComponent } from './components/bookoverview/bookoverview.component';
import { BookeditorComponent } from './components/bookeditor/bookeditor.component';
import { BookcreateComponent } from './components/bookcreate/bookcreate.component';

import { AuthoroverviewComponent } from './components/authoroverview/authoroverview.component';
import { AuthoreditorComponent } from './components/authoreditor/authoreditor.component';
import { AuthorcreateComponent } from './components/authorcreate/authorcreate.component';

import { PubviewComponent } from './components/pubview/pubview.component';
import { PubeditComponent } from './components/pubedit/pubedit.component';
import { PublishercreateComponent } from './components/publishercreate/publishercreate.component';

import { CollectionComponent } from './components/collection/collection.component';

import { AuthorlistComponent} from './components/authorlist/authorlist.component';
import { AuthordetailComponent} from './components/authordetail/authordetail.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'book/:id', component: BookComponent },
  { path: 'author/:id', component: AuthordetailComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'authorlist', component: AuthorlistComponent },
  // Requires login
  { path: 'userdetails', component: UserdetailComponent, canActivate: [LoginGuard]},
  { path: 'bookschema', component: BookoverviewComponent, canActivate: [LoginGuard]},
  { path: 'authorschema', component: AuthoroverviewComponent, canActivate: [LoginGuard]},
  { path: 'publisherschema', component: PubviewComponent, canActivate: [LoginGuard]},
  { path: 'bookedit/:id', component: BookeditorComponent, canActivate: [LoginGuard]},
  { path: 'authoredit/:id', component: AuthoreditorComponent, canActivate: [LoginGuard]},
  { path: 'publisheredit/:id', component: PubeditComponent, canActivate: [LoginGuard]},
  { path: 'authorcreate', component: AuthorcreateComponent, canActivate: [LoginGuard]},
  { path: 'publishercreate', component: PublishercreateComponent, canActivate: [LoginGuard]},
  { path: 'bookcreate', component: BookcreateComponent, canActivate: [LoginGuard]},
  // When path does not exist.
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
