import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewsComponent } from './components/views/views.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { DemoPipe } from './pipes/demo.pipe';
import { HighlightDirective } from './directives/highlight.directive';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MensWatchesComponent } from './components/mens-watches/mens-watches.component';
import { WomensWatchesComponent } from './components/womens-watches/womens-watches.component';
import { SmartWatchesAllComponent } from './components/smart-watches-all/smart-watches-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ViewsComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    DemoPipe,
    HighlightDirective,
    MensWatchesComponent,
    WomensWatchesComponent,
    SmartWatchesAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
