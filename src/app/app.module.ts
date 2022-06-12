import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService, KeycloakEventType } from 'keycloak-angular';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

import { MyComponentsModule } from './my-components/my-components.module'

import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { PeopleService } from './services/people.service';

function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    keycloak.init({
      config: {
        url: 'https://auth.unterrainer.info/auth',
        realm: '2021-4bhif',
        clientId: 'webapp'
      },
      initOptions: {
        onLoad: 'login-required',//'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
        enableLogging: true
      },
      enableBearerInterceptor: true
    }).then(success => console.log(`keycloak init returned:`, success)
    ).catch(e => console.log(`keycloak init exception:`, e));
    keycloak.keycloakEvents$.subscribe({
      next: (e) => {
        if (e.type == KeycloakEventType.OnTokenExpired) {
          keycloak.updateToken(20);
        }
        console.log("Keycloak event: ", e);
      }
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MyComponentsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
