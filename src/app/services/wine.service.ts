import { Injectable } from '@angular/core';
import { Wine } from '../shared/models/wine';
import { sample_tags, sample_wine } from 'src/data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WINES_BY_ID_URL, WINES_BY_SEARCH_URL, WINES_BY_TAG_URL, WINES_TAGS_URL, WINES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }

  getAll() : Observable<Wine[]> {
    return this.http.get<Wine[]>(WINES_URL);
  }

  getAllWineBySearchTerm(searchTerm : string){
    return this.http.get<Wine[]>(WINES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(WINES_TAGS_URL);
  }

  getAllWinesByTag(tag: string): Observable<Wine[]>{
    return tag ==="All"?
    this.getAll() :
    this.http.get<Wine[]>(WINES_BY_TAG_URL + tag);
  }

  getWineById(wineId : string): Observable<Wine>{
    return this.http.get<Wine>(WINES_BY_ID_URL + wineId);
  }
}
