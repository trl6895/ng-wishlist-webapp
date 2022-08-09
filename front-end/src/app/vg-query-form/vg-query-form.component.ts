import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VgListComponent } from '../vg-list/vg-list.component';
import { VgService } from '../vg.service';

@Component({
  selector: 'app-vg-query-form',
  templateUrl: './vg-query-form.component.html',
  styleUrls: ['./vg-query-form.component.css']
})
export class VgQueryFormComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required)
    });
  }

  constructor(private formBuilder: FormBuilder, private vgService: VgService) {
    
  }

  onSubmit(titleInput: string){
    this.vgService.query(titleInput);
  }

}
