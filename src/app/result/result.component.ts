import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';

 
import {Http, Response} from '@angular/http';

import { Constants } from "../constants"; 
 
 
@Component ({
    selector:     'mt-wizard-result',
    templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    result = '!';
    @Input() formData: FormData;
    isFormValid: boolean = false; 
    
    constructor(private formDataService: FormDataService, private http: Http) {
        let data = this.formDataService.getFormData();
        let api_url = Constants.API_URL;

        console.log('FROM RESULT STEP');
        console.log(data);

        this.http.post(api_url, data)
          .subscribe(
            (res:Response) => {
              console.log(res.json());
              //this.result = 'Ok';
            },
            err => {
              console.log("Error occured");
              //this.result = 'Error';
            }
        );
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }

    
}
