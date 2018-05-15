import { Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';

import { SecondStepA }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import { MatDatepicker } from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 
 
@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './secondstepa.component.html'
})

export class SecondStepAComponent implements OnInit {
    secondstepa: SecondStepA;
    form: any; 
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.secondstepa = this.formDataService.getSecondStepA();
        window.scrollTo(0,0);
    }

    save(form: any): boolean {
 
        if (!form.valid) {
            return false;
        }
        this.formDataService.setSecondStepA(this.secondstepa);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/firststep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/thirdstep']);
        }
    }  

}
