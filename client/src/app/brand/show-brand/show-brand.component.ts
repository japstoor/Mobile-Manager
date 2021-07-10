import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.component.html',
  styleUrls: ['./show-brand.component.css']
})
export class ShowBrandComponent implements OnInit {
  
  ActivateAddEditBrandComp:boolean=false;
  constructor(private service:SharedService, private router: Router,) { }
  
  BrandList:any=[];
  ModalTitle: string="";
  bran:any;

  BrandIdFilter:any;
  BrandNameFilter:string="";
  BrandListWithoutFilter:any=[];
  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.router.navigate(['/brand']);
      
    }
    this.refreshbrandList()
    
  }

  addClick(){
    this.bran={
      BrandId:0,
      BrandName:""
    }
    this.ActivateAddEditBrandComp=true;
    this.ModalTitle="Add Brnad";

  }

  editClick(item: any, ){
    this.bran=item;
    this.ModalTitle="Edit Brand";
    this.ActivateAddEditBrandComp=true;
  }
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletebrand(item.BrandId).subscribe(data=>{
        alert(data.toString());
        this.refreshbrandList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditBrandComp=false;
    this.refreshbrandList();
  }

  refreshbrandList(){
    this.service.getbrandList().subscribe(data=>{
      this.BrandList=data;
    });
  }

  

  
}
