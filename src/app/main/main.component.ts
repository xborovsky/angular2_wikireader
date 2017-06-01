import { Component, Output } from '@angular/core';

import { SearchService } from '.././search.service';
import { WikiArticle } from '.././wiki-article';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

    iconVisible : boolean = true;
    articles : WikiArticle[] = [];
    errorMessage : string;
    searchText : string = '';

    constructor(private searchService : SearchService) {}

    search(searchText : string) {
        if (searchText) {
            this.searchService.searchOnWiki(searchText).subscribe(
                articles => { this.articles = articles; },
                error => this.errorMessage = <any>error
            );
        }
    }

    changeIconVisibleState() {
        this.iconVisible = !this.iconVisible;
        this.articles = [];
        if (this.iconVisible) {
            this.searchText = '';
        }
    }

}
