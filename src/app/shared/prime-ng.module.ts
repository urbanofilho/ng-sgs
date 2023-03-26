import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GMapModule } from 'primeng/gmap';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { MessageService, ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    GMapModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ProgressBarModule,
    RippleModule,
    SelectButtonModule,
    TableModule,    
    ToastModule,
    ToolbarModule,
    TooltipModule,
    ToggleButtonModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    GMapModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ProgressBarModule,
    RippleModule,
    SelectButtonModule,
    TableModule,    
    ToastModule,
    ToolbarModule,
    TooltipModule,
    ToggleButtonModule
  ],
  providers: [
    MessageService, 
    ConfirmationService
  ],  
})
export class PrimeNGModule { }
