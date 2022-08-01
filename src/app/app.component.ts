import { Component, ComponentDecorator } from "@angular/core";

@Component({
    selector: "wl-app",
    templateUrl: "./app.component.html",
    styleUrls: [
        "./app.component.css"
    ]
})
export class AppComponent{
    outerWilds = {
        id: 1,
        title: "Outer Wilds",
        dev: "Mobius Digital",
        pub: "Annapurna Interactive",
        date: "05.28.2019",
        gens: ["Expolration", "Space", "Mystery"],
        wishlisted: false
    };
}