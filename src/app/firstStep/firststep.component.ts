import { Component, OnInit}   from '@angular/core';
import { Router }             from '@angular/router';

import { FirstStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import { MatDatepicker} from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 

declare var jquery:any;
declare var $ :any;
   
@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './firststep.component.html'
})
 
export class FirstStepComponent implements OnInit {
    firststep: FirstStep;
    form: any;
    startDate = new Date(1990, 0, 1); // Calendar
       
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.firststep = this.formDataService.getFirstStep();
    }
  
    ngAfterViewInit() {
        $('#splash').slideUp(150,function() {$('#main_as').slideDown(350);})
    }
     
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setFirstStep(this.firststep);
        return true;
    }

    goToNext(form: any) { 
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/secondstep']);
        }  
    }

    // Open Calendar on Input Click
    _openCalendar(picker: MatDatepicker<Date>) {
        picker.open();  
    }
}