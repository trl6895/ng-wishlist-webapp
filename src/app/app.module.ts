import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { VgComponent } from './vg/vg.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        VgComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{};