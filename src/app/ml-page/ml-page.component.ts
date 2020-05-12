import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ml',
  templateUrl: './ml-page.component.html',
  styleUrls: ['./ml-page.component.css']
})
export class MlPageComponent implements OnInit {

  mlPredictions: {};

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onGenerateMLPredictionsByClassification(){
    this.mlPredictions = this.http.get("/rest-api/machine-learning")
      .subscribe(responseData => {
        console.log('Des');
        return responseData;
      }
    )
  }

  onGenerateMLPredictionsByBeepLearning(){
    this.mlPredictions = this.http.get("/rest-api/deep-learning")
      .subscribe(responseData => {
        console.log('Des');
        return responseData;
      }
    )
  }

  onNextBtnClicked(): void {
    this.router.navigate(['report']);
  }
}
