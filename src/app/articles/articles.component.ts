import { Component, Input } from '@angular/core';
import { WikiArticle } from '.././wiki-article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {

  @Input()
  articles : WikiArticle[];

  goToArticle(id : number) {
      window.open('https://en.wikipedia.org/?curid=' + id, '_blank');
  }

}
