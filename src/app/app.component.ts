import { Component } from "@angular/core";
import { WikiService } from "./wiki.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pages = [];
  constructor(private _wikiService: WikiService) {}
  onTerm(term: string) {
    this._wikiService.getData(term).subscribe((pages) => (this.pages = pages));
  }
}
