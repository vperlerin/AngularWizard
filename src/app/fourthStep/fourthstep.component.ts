import { Component, OnInit} from '@angular/core';
import { Router }           from '@angular/router';

import { FourthStep }        from '../data/formData.model';
import { FormDataService }  from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './Fourthstep.component.html'
})

export class FourthStepComponent implements OnInit {
    fourthstep: FourthStep;
    form: any; 
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.fourthstep = this.formDataService.getFourthStep();
        console.log('Fourth Step loaded!'); 
        window.scrollTo(0,0);
    }
 
    save(form: any): boolean {
        console.log('SAVE ', this.fourthstep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');
        this.formDataService.setFourthStep(this.fourthstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            console.log('Go to 2nd');
            this.router.navigate(['/thirdstep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            console.log('Go to Final Step');
            this.router.navigate(['/finalstep']);
        }
    } 
}
