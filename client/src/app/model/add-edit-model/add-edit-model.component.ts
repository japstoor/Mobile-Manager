import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() mod:any;
  ModelId:any;
  ModelName:string="";
  BrandName :string="";
  Quantity:string=""; 
  BrandList:any=[];
  ngOnInit(): void {
    this.loadBrandList();
    
  }
  loadBrandList(){
    this.service.getbrandList().subscribe((data:any)=>{
      this.BrandList=data;
      this.ModelId=this.mod.ModelId;
      this.ModelName=this.mod.ModelName;
      this.BrandName=this.mod.BrandName;
      this.Quantity=this.mod.Quantity;
     
    });
  }
  addModel(){
    var val = {ModelId:this.ModelId,
                ModelName:this.ModelName,
                BrandName:this.BrandName, 
                Quantity:this.Quantity};
    this.service.addmodel(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateModel(){
    var val = {ModelId:this.ModelId,
                ModelName:this.ModelName,
                BrandName:this.BrandName, 
                Quantity:this.Quantity};
    this.service.updatemodel(val).subscribe(res=>{
    alert(res.toString());
    });
    
    
  }
}
