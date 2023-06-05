import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  constructor (wineService: WineService) {
    wineService.getAllTags().subscribe(serverTags =>{
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {

  }

}
