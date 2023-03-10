import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbInputModule, NbIconModule, NbFormFieldModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { TuringComponent } from './turing/turing.component';
import { AfdComponent } from './afd/afd.component';
import { TuringModule } from './turing/turing.module';
import { AfdModule } from './afd/afd.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TuringComponent,
    AfdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    HttpClientModule,
    NbFormFieldModule,
    NbSelectModule,
    NbToastrModule.forRoot(),
    MatInputModule,
    TuringModule,
    AfdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
