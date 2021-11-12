import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

export interface Cartoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-set-availability',
  templateUrl: './set-availability.component.html',
  styleUrls: ['./set-availability.component.css']
})


export class SetAvailabilityComponent implements OnInit {
  // days:any;
  
    //   this.days = [
    //   { name: 'Sunday', selected: false },
    //   { name: 'Monday', selected: false },
    //   { name: 'Tuesday', selected: false },
    //   { name: 'Wednesday', selected: false },
    //   { name: 'Thursday', selected: false },
    //   { name: 'Friday', selected: false },
    //   { name: 'Saturday', selected: false }
    // ]

  form: FormGroup;
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'Tom and Jerry' },
    { id: 1, name: 'Rick and Morty' },
    { id: 2, name: 'Ben 10' },
    { id: 3, name: 'Batman: The Animated Series' }
  ];
  constructor(private fb: FormBuilder) { }

    // Sunday: number = 0;
    // Monday: number = 1;
    // checkboxes = [
    //   {
    //     value: 'Sunday',
    //     selected: false
    //   },
    //   {
    //     value: 'Monday',
    //     selected: false
    //   },
    //   {
    //     value: 'Tuesday',
    //     selected: false
    //   },
    //   {
    //     value: 'Wednesday',
    //     selected: false
    //   }
    // ]

    // console.log(checkboxes);

    onChange(name: string, isChecked: boolean) {
      const cartoons = (this.form.controls.name as FormArray);
  
      if (isChecked) {
        cartoons.push(new FormControl(name));
      } else {
        const index = cartoons.controls.findIndex(x => x.value === name);
        cartoons.removeAt(index);
      }
    }
  
    ngOnInit() {
      this.form = this.fb.group({
        name: this.fb.array([])
      });
    }
  
    submit() {
      console.log(this.form.value.name);
    }
 

}
