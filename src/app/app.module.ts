import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpModule }		  from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App Root */
import { AppComponent }       from './app.component';
 
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

/* Material */ 
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule, MatCardModule, MatDatepicker, MatProgressSpinnerModule } from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio'; 

  
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
				    BrowserAnimationsModule,
				    // Material
				    MatInputModule, 
				    MatButtonModule,
				    MatSelectModule,
				    MatIconModule,
				    MatDatepickerModule, 
				    MatNativeDateModule,
				    MatCardModule,
				    MatRadioModule,
				    MatProgressSpinnerModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent,  FirstStepComponent, SecondStepComponent, WorkComponent, AddressComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { 


} 