import { Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';

import { SecondStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import { IMyDpOptions} from 'mydatepicker';
 
 
@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './secondstep.component.html'
})

export class SecondStepComponent implements OnInit {
    secondstep: SecondStep;
    form: any;
    placeholder: string = 'Your Partner Birthday';
     
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    myDatePickerOptions: IMyDpOptions = {
        inline:false,
        dateFormat: 'yyyy-mm-dd',
        showTodayBtn: false,
        editableDateField: false,
        openSelectorOnInputClick:true,
        maxYear:2010
    };


    ngOnInit() {
        this.secondstep = this.formDataService.getSecondStep();
        console.log('Second Step loaded!'); 
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
}
