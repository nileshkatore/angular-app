import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-alert',
    templateUrl: './alert-page.component.html'
})
export class AlertPageComponent implements OnInit {

    pendingTransations: {};
    alertGenerated: {};
    
    constructor(private router:Router, private http: HttpClient) { }

    ngOnInit(): void {
        this.pendingTransations = this.http.get("/rest-api/pending-transactions")
        .subscribe(responseData => {
          console.log('Des');
          return responseData;
        })
    }

    onGenerateAlert() {
        this.alertGenerated = this.http.get("/rest-api/generate-alerts")
          .subscribe(responseData => {
            console.log('Des');
            return responseData;
        })
    }  

    onNextBtnClicked(){
        this.router.navigate(['ml-predictions']);   
    }

}

const TxnData = {
    TXN_cash : 1400,
    TXN_cc : 1230
}