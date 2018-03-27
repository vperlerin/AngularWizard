import { Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';

import { FirstStep }          from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import { IMyDpOptions} from 'mydatepicker';
 
 
@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './firststep.component.html'
})

export class FirstStepComponent implements OnInit {
    firststep: FirstStep;
    form: any;

    private placeholder: string = 'Your Birthday';
     
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
            this.router.navigate(['/work']);
        }
    }
}
