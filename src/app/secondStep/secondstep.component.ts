import { Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';

import { SecondStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import {  MatDatepicker } from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 
 
@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './secondstep.component.html'
})

export class SecondStepComponent implements OnInit {
    secondstep: SecondStep;
    form: any;
    startDate = new Date(1990, 0, 1); // Calendar
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.secondstep = this.formDataService.getSecondStep();
        console.log('Second Step loaded!'); 
        window.scrollTo(0,0);
    }

    save(form: any): boolean {
 
        if (!form.valid) {
            return false;
        }
        this.formDataService.setSecondStep(this.secondstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/firstStep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/thirdStep']);
        }
    } 

     // Open Calendar on Input Click
    _openCalendar(picker: MatDatepicker<Date>) {
        picker.open();  
    }

}
