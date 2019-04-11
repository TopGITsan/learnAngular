import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ApidataService {
  constructor(private http: HttpClient) {

  }

  getData(){
    return this.http.get('https://top-exercise-tracker.glitch.me/api/exercise/users');
  }
}
