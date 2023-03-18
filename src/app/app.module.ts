import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';

import { ApunteRouteModule } from './apunte/apunte-route.module';
import { QrRouteModule } from './qr/qr-route.module';

@NgModule({
    declarations: [
        AppComponent, 
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ApunteRouteModule,
        QrRouteModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
