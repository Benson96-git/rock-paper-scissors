import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RcpgameComponent } from './rcpgame/rcpgame.component';

@NgModule({
    declarations: [
        AppComponent,
        RcpgameComponent,
    ],
    imports: [
        BrowserModule,

    ],
    providers: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }