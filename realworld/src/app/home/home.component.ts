import { Component, OnInit } from '@angular/core';

const mockData: IArticle[] = [
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'Eric Simons',
    publishDate: new Date('2020-01-20'),
    likes: 29,
    title: 'How to build webapps that scale',
    content: 'This is the description for the post.'
  },
  {
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    author: 'Albert Pai',
    publishDate: new Date('2020-01-20'),
    likes: 29,
    title: `The song you won't ever stop singing. No matter how hard you try.`,
    content: 'This is the description for the post.'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = mockData;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface IArticle {
  avator: string;
  author: string;
  publishDate: Date;
  likes: number;
  title: string;
  content: string;
}
