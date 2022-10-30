import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VgService {
    vgs = [
        {
          id: 1,
          name: "Outer Wilds",
          developer: ["Mobius Digital"],
          publisher: "Annapurna Interactive",
          date: "05.28.2019",
          //gens: ["Expolration", "Space", "Mystery"],
          wishlisted: false,
          img_url: "../../assets/outer-wilds-banner.jpg"
        },
        {
          id: 2,
          title: "Hollow Knight",
          dev: ["Team Cherry"],
          pub: "Team Cherry",
          date: "02.24.2017",
          gens: ["Metroidvania", "Souls-Like", "Platformer"],
          wishlisted: false,
          art: "../../assets/hollow-knight-banner.jpg"
        },
        {
          id: 3,
          title: "Chicory: A Colorful Tale",
          dev: ["Greg Lobanov, Alexis Dean-Jones, Lena Raine, Madeline Berger, A Shell"],
          pub: "Finji",
          date: "06.10.2021",
          gens: ["Cute", "Adventure", "Story Rich"],
          wishlisted: false,
          art: "../../assets/chicory-banner.jpg"
        }
    ];

    constructor(private http: HttpClient) {}

    get(){
        //return this.vgs;
        console.log('here!');
        return this.http.get<VGResponse>('http://localhost:8080/games', { observe: 'body', responseType: 'json' })
          .pipe(map(response => { return response.vgs }));
        
          // TODO: TRISTON NOTE TO FUTURE SELF. RESTRUCTURE THE DATA IN MONGO
          // SO THAT IT CAN MATCH TO THE DATA ON THE FRONT END BEFORE FINISHING THE FRONT END STUFF HERE
    }

    query(input: string) {
       //This function will send a query to the backend api, which will query the db with mongoose
    }

    toggleWishlist(vg: any){
        vg.wishlisted ? vg.wishlisted = false : vg.wishlisted = true;
    }
}

interface VG {
  _id : number;
  name: string;
  developer: string,
  publisher: string,
  date: string,
  wishlisted: boolean,
  img_url: string
}

interface VGResponse {
  vgs: VG[];
}