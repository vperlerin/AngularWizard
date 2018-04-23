import { Component, OnInit, Input }   from '@angular/core';
import { FormDataService }            from './data/formData.service';


import { BrowserModule } from '@angular/platform-browser'; 

import { routerTransition } from './router.animations';

@Component ({
    selector:     'app',
    templateUrl: './app.component.html'
}) 

export class AppComponent implements OnInit {

    title = 'The Cheating Test';
    @Input() formData;
    
    today = Date.now(); // Copyright Date
    
    constructor(private formDataService: FormDataService) {}

   
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
        window.scrollTo(0, 0);
    }
    
    

}