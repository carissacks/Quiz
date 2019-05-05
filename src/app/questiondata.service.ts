import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestiondataService {

  constructor(private http: HttpClient) { }

  getQuestion(){
    return this.http.get('')
  }
}
