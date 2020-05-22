import { Component } from "@angular/core";
import { WikiService } from "./wiki.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pages = [];
  constructor(private _wikiService: WikiService) {}
  onTerm(term: string) {
    this._wikiService.getData(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(res.query.search);
    });
  }
}
