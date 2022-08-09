import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { VgComponent } from './vg/vg.component';
import { VgListComponent } from './vg-list/vg-list.component';
import { VgQueryFormComponent } from './vg-query-form/vg-query-form.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        VgComponent,
        VgListComponent,
        VgQueryFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule{};