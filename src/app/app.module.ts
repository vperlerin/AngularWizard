import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { FirstStepComponent }  from './firstStep/firststep.component';
import { SecondStepComponent }  from './secondStep/secondstep.component';


import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
 

/* Datepicker */
import { MyDatePickerModule } from 'mydatepicker';
import { IMyDpOptions} from 'mydatepicker';


@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    MyDatePickerModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent,  FirstStepComponent, SecondStepComponent, WorkComponent, AddressComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}