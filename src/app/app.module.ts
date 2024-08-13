import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeatureModule } from './module/feature/feature.module';
import { SharedModule } from './module/shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './state/auth/auth.reducer';
import { userReducer } from './state/user/user.reducer';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { productReducer } from './state/product/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot({
      auth: authReducer, 
      user: userReducer,
      product: productReducer
    }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
