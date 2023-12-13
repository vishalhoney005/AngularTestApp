import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';


@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  form!: FormGroup;
  catid: number = 0;
  list: Category[] = [];
  category1!: Category;
  constructor(private catService: CategoryService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.catid = this.route.snapshot.params['id'];

    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required)
    })


    this.catService.getById(this.catid).subscribe(c => {
      console.log(c);
      this.category1 = c;
      // this.form.setValue({name: c.name});
      this.form.setValue({
        id: this.catid,
        name: this.category1.name
      })
    }, err => {
      console.log(err);
      alert('error');
    })

  }
  submit() {



  }
}