import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  wines: Wine[] = [];
  constructor(private wineService : WineService,
    activatedRoute: ActivatedRoute) {
      let winesObservable: Observable<Wine[]>;
      activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      winesObservable = this.wineService.getAllWineBySearchTerm(params.searchTerm);
      else if(params.tag)
      winesObservable = this.wineService.getAllWinesByTag(params.tag);
      else
      winesObservable = wineService.getAll();

      winesObservable.subscribe((serverWines) =>{
        this.wines = serverWines;
      })
    })
   }

  ngOnInit(): void {

  }


}
