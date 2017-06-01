import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WikiArticle } from './wiki-article';

const API_ADDRESS = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10' +
                        '&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const JSONP_CALLBACK = '&callback=JSONP_CALLBACK';

@Injectable()
export class SearchService {

  constructor(private http:Http, private jsonp:Jsonp) { }

  searchOnWiki(searchText : string) : Observable<WikiArticle[]> {
      return this.jsonp.get(API_ADDRESS + searchText + JSONP_CALLBACK)
        .map(this.extractData)
        .catch((err : Response | any) => { return err.json(); });
  }
  
  private extractData(res : Response) {
      let body = res.json();
      let wikiArticles : WikiArticle[] = [];

      if (!body.query || !body.query.pages) {
          return {};
      }

      var pages = body.query.pages;;
      
      for (var page in pages) {
          wikiArticles.push(new WikiArticle(parseInt(page), pages[page].title, pages[page].extract));
      }
      
      return wikiArticles;
  }

}
