import { NgModule }           from '@angular/core';

import { FormsModule }        from '@angular/forms';
import { HttpModule }		  from '@angular/http'; 

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* App Root */
import { AppComponent }       from './app.component';
 
/* Feature Components */
import { FirstStepComponent }  from './firstStep/firststep.component';
import { SecondStepComponent }  from './secondStep/secondstep.component';
import { SecondStepAComponent }  from './secondStepA/secondstepa.component';
import { ThirdStepComponent }  from './thirdStep/thirdstep.component';
import { FourthStepComponent }  from './fourthStep/fourthstep.component';
import { FinalStepComponent }  from './finalStep/finalstep.component';
import { ResultComponent }  from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service'; 

/* Material */ 
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule, MatCardModule, MatDatepicker } from '@angular/material'; 
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio'; 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports:      [ FormsModule,
                    AppRoutingModule,
                    HttpModule,
 					FlexLayoutModule,
				    BrowserModule, 
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
				    FlexLayoutModule 
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent,  FirstStepComponent, SecondStepAComponent, SecondStepComponent, ThirdStepComponent, FourthStepComponent,FinalStepComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {
  
} 