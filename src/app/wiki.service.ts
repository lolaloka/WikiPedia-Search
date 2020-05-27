import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { wikiResponse } from "../@core/wikiResponceInterface";
import { pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class WikiService {
  constructor(private _http: HttpClient) {}
  getData(term: string) {
    return this._http
      .get<wikiResponse>("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          srsearch: term,
          utf8: "1",
          format: "json",
          origin: "*",
        },
      })
      .pipe(pluck("query", "search"));
  }
}
