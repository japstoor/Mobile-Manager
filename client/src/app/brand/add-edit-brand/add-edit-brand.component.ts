import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css']
})
export class AddEditBrandComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }
  @Input() bran:any;
  BrandId:any;
  BrandName:string="";
  ngOnInit(): void {
    this.BrandId=this.bran.brandId;
    this.BrandName=this.bran.BrandName;
    
  }

  addBrand(){
    var val = {BrandId:this.BrandId,
                BrandName:this.BrandName};
    this.service.addbrand(val).subscribe(res=>{
      alert(res.toString());
      this.bran.close(); 
      this.router.navigate(['/brand'])
    });
  }

  updateBrand(){
    var val = {BrandId:this.bran.BrandId,
                BrandName:this.BrandName};
    this.service.updatebrand(val).subscribe(res=>{
    alert(res.toString());
    });
    
    
  }
 

}
