import { Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';

import { FirstStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
 
 
 
@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './firststep.component.html'
})

export class FirstStepComponent implements OnInit {
    firststep: FirstStep;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }
  


    ngOnInit() {
        this.firststep = this.formDataService.getFirstStep();
        console.log('First Step loaded!'); 
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
            this.router.navigate(['/secondStep']);
        }
    }
}
