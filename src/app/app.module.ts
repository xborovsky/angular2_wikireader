import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';

import { MainComponent } from './main/main.component';

import { SearchService } from './search.service';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    MainComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SearchService],
  bootstrap: [MainComponent]
})
export class AppModule { }
