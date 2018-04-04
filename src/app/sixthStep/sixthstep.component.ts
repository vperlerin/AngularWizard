import { Component, OnInit} from '@angular/core';
import { Router }           from '@angular/router';

import { SixthStep }        from '../data/formData.model';
import { FormDataService }  from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './Sixthstep.component.html'
})

export class SixthStepComponent implements OnInit {
    sixthstep: SixthStep;
    form: any; 
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.sixthstep = this.formDataService.getSixthStep();
        console.log('Sixth Step loaded!'); 
        window.scrollTo(0,0);
    }
 
    save(form: any): boolean {
        console.log('SAVE ', this.sixthstep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');
        this.formDataService.setSixthStep(this.sixthstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) { 
            this.router.navigate(['/sithstep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) { 
            this.router.navigate(['/finalstep']);
        }
    } 
}
