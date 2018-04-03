import { Component, OnInit}   from '@angular/core';
import { Router }             from '@angular/router';

import { FirstStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import { MatDatepicker} from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 
   
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

    save(form: any): boolean {
        console.log('SAVE ', this.firststep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');
        this.formDataService.setFirstStep(this.firststep);
        return true;
    }

    goToNext(form: any) {
        console.log('GO TO NEXT (FIRST STEP)');

        if (this.save(form)) {
            console.log('SAVE');
            // Navigate to the work page
            this.router.navigate(['/secondstep']);
        } else {
            console.log('NOT SAVE');
        }
    }

    // Open Calendar on Input Click
    _openCalendar(picker: MatDatepicker<Date>) {
        picker.open();  
    }

    
}
