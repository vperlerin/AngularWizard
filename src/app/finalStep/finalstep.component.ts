import { Component, OnInit, Input } from '@angular/core';
import { Router }           from '@angular/router';
import { FinalStep }        from '../data/formData.model';
import { FormDataService }  from '../data/formData.service';


import {Http, Response} from '@angular/http';

import { Constants } from "../constants"; 
 
@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './finalstep.component.html'
}) 
 

export class FinalStepComponent implements OnInit {
    form: any;
    finalstep: FinalStep;  

    constructor(private router: Router, private formDataService: FormDataService, private http: Http) {
    } 
 
    ngOnInit() {
        this.finalstep = this.formDataService.getFinalStep();
        console.log('Final Step loaded!'); 
        window.scrollTo(0,0);
    }
  
    save(form: any): boolean {
        console.log('SAVE ', this.finalstep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');

        console.log('ALL DATA ', this.formDataService.getFormData());

        let data = this.formDataService.getFormData();
        let api_url = Constants.API_URL;
        this.http.post(api_url, data)
          .subscribe(
            (res:Response) => {
              console.log(res.json());
            },
            err => {
              console.log("Error occured");
            }
          );
 
        this.formDataService.setFinalStep(this.finalstep);
        return true;
    }


    goToPrevious(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/sixthstep']);
        }
    }


    goToNext(form: any) {
        console.log('GO TO NEXT (RESULT)');

        if (this.save(form)) {
            console.log('SAVE');
            // Navigate to the work page
            this.router.navigate(['/result']);
        } else {
            console.log('NOT SAVE');
        }
    }

    
}
