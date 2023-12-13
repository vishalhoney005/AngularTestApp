import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;
  list: Category[] = [];

  constructor(private proservice: ProductService, private catService: CategoryService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.required),
      categoryId: new FormControl('', Validators.required),
      manufacturedDate: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    })
    this.catService.getList().subscribe(result => {
      console.log(result);
      this.list = result;
    },
      error => {
        alert(error);
      })
  }
  submit() {
    console.log(this.form.value);
    this.proservice.add(this.form.value).subscribe(result => {
      alert("Added Successfully");
      this.router.navigate(['products']);
    }, err => {
      alert("Error Occurred");
      console.log(err);
    })
  }
}

