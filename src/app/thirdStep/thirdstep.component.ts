import { Component, OnInit} from '@angular/core';
import { Router }           from '@angular/router';

import { ThirdStep }        from '../data/formData.model';
import { FormDataService }  from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './thirdstep.component.html'
})

export class ThirdStepComponent implements OnInit {
    thirdstep: ThirdStep;
    form: any; 
      
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.thirdstep = this.formDataService.getThirdStep();
        console.log('Third Step loaded!'); 
        window.scrollTo(0,0);
    }
 
    save(form: any): boolean {
        console.log('SAVE ', this.thirdstep);
        if (!form.valid) {
            console.log('FORM IS NOT VALID');
            return false;
        }
        console.log('FORM IS VALID');
        this.formDataService.setThirdStep(this.thirdstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            console.log('Go to 2nd');
            this.router.navigate(['/secondstep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            console.log('Go to 4th');
            this.router.navigate(['/fourthStep']);
        }
    } 
}
