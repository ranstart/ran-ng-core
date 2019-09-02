import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'ran-demo-ckeditor',
    templateUrl: './demo-ckeditor.component.html'
})
export class DemoCkeditorComponent implements OnInit {

    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            ckeditorBaseData: new FormControl(''),
            ckeditorClassicData: new FormControl(''),
            ckeditorDocumentData: new FormControl('')
        });
    }
}