import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  list:Product[]=[];
  private productId=0;
  constructor(private proservice:ProductService){}
  
  ngOnInit(): void {
    this.proservice.getList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert(err);
    }
    )
  }
  delete(){
    console.log('Product to delete:' + this.productId);
    this.proservice.delete(this.productId).subscribe(()=>{
      alert('delete successful');
      this.ngOnInit();
    },err=>{
      console.log(err);
      alert('error')
    }
    )
  }
  setProductID(id:number){
    this.productId=id;
  }
}
