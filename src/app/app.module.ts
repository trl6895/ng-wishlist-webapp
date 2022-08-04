import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { VgComponent } from './vg/vg.component';
import { VgListComponent } from './vg-list/vg-list.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        VgComponent,
        VgListComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{};