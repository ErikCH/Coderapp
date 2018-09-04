import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreInfoService } from './store-info.service';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatListModule
} from '@angular/material';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
