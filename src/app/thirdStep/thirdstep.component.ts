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
        window.scrollTo(0,0);
    }
 
    save(form: any): boolean {
       
        if (!form.valid) {
            return false;
        }
        this.formDataService.setThirdStep(this.thirdstep);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/secondstep']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/fourthstep']);
        }
    } 
}
