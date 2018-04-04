import { Component, OnInit} from '@angular/core';
import { Router }           from '@angular/router';

import { FithStep }        from '../data/formData.model';
import { FormDataService }  from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './Fithstep.component.html'
})

export class FithStepComponent implements OnInit {
    fithstep: FithStep;
    form: any; 
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.fithstep = this.formDataService.getFithStep();
        console.log('Fith Step loaded!'); 
        window.scrollTo(0,0);
    }
 
    save(form: any): boolean {
        console.log('SAVE ', this.fithstep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');
        this.formDataService.setFithStep(this.fithstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            console.log('Go to 4th');
            this.router.navigate(['/fourthstep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            console.log('Go to 4th');
            this.router.navigate(['/sixthstep']);
        }
    } 
}
