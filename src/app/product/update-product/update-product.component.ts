import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId: number = 0;
  product1!: Product;
  form1!: FormGroup;
  list: Category[] = [];
  
  constructor(private route: ActivatedRoute, private pService: ProductService,
    private catService: CategoryService, private dpipe: DatePipe,private router:Router) { }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];

    this.form1 = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.min(1), Validators.required]),
      categoryId: new FormControl(null, Validators.required),
      manufacturedDate: new FormControl(''),
      imageUrl: new FormControl('', Validators.required)
    });


    //this.form1.patchValue
    /* this.form1.patchValue(this.product1) */

    this.catService.getList().subscribe(result => {
      console.log(result);
      this.list = result;
    }, err => {
      console.log(err);
      alert('error');
    })

    //service method
    this.pService.getById(this.productId).subscribe(p => {
      console.log(p);
      this.product1 = p;

      this.form1.setValue({
        id: this.product1.id,
        name: this.product1.name,
        price: this.product1.price,
        categoryId: this.product1.categoryId,
        manufacturedDate: this.dpipe.transform(this.product1.manufacturedDate, 'yyyy-MM-dd'),
        imageUrl: this.product1.imageUrl
      });
    }, err => {
      console.log(err);
      alert('error');
    })

  }

  submitPro() {
    
    this.pService.update(this.form1.value).subscribe(()=> {
      alert('successfully updated');
      //redirect to product list
      this.router.navigate(['/products']);
    },err=>{
      console.log(err);
      alert('Error while updating the product');
    })
  }

}