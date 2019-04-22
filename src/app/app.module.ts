import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { LoginGuard } from './login/login.guard';
import { BookComponent } from './components/book/book.component';
import { BookoverviewComponent } from './components/bookoverview/bookoverview.component';
import { BookeditorComponent } from './components/bookeditor/bookeditor.component';

import { AuthoroverviewComponent } from './components/authoroverview/authoroverview.component';
import { AuthoreditorComponent } from './components/authoreditor/authoreditor.component';
import { AuthorcreateComponent } from './components/authorcreate/authorcreate.component';

import { PubviewComponent } from './components/pubview/pubview.component';
import { PubeditComponent } from './components/pubedit/pubedit.component';
import { PublishercreateComponent } from './components/publishercreate/publishercreate.component';
import { BookcreateComponent } from './components/bookcreate/bookcreate.component';
import { CollectionComponent } from './components/collection/collection.component';
import { AuthorlistComponent } from './components/authorlist/authorlist.component';
import { AuthordetailComponent } from './components/authordetail/authordetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserdetailComponent,
    BookComponent,
    BookoverviewComponent,
    BookeditorComponent,
    AuthoroverviewComponent,
    AuthoreditorComponent,
    AuthorcreateComponent,
    PubviewComponent,
    PubeditComponent,
    PublishercreateComponent,
    BookcreateComponent,
    CollectionComponent,
    AuthorlistComponent,
    AuthordetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
