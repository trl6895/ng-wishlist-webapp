import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class VgService {
    vgs = [
        {
          id: 1,
          title: "Outer Wilds",
          dev: "Mobius Digital",
          pub: "Annapurna Interactive",
          date: "05.28.2019",
          gens: ["Expolration", "Space", "Mystery"],
          wishlisted: false,
          art: "../../assets/outer-wilds-banner.jpg"
        },
        {
          id: 2,
          title: "Hollow Knight",
          dev: "Team Cherry",
          pub: "Team Cherry",
          date: "02.24.2017",
          gens: ["Metroidvania", "Souls-Like", "Platformer"],
          wishlisted: false,
          art: "../../assets/hollow-knight-banner.jpg"
        },
        {
          id: 3,
          title: "Chicory: A Colorful Tale",
          dev: "Greg Lobanov, Alexis Dean-Jones, Lena Raine, Madeline Berger, A Shell",
          pub: "Finji",
          date: "06.10.2021",
          gens: ["Cute", "Adventure", "Story Rich"],
          wishlisted: false,
          art: "../../assets/chicory-banner.jpg"
        }
    ];

    get(){
        return this.vgs;
    }

    query(input: string) {
       //This function will send a query to the backend api, which will query the db with mongoose
    }

    toggleWishlist(vg: any){
        vg.wishlisted ? vg.wishlisted = false : vg.wishlisted = true;
    }

}