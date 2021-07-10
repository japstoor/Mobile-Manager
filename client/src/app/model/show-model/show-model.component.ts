import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-model',
  templateUrl: './show-model.component.html',
  styleUrls: ['./show-model.component.css']
})
export class ShowModelComponent implements OnInit {
  ActivateAddEditModelComp:boolean=false;
  constructor(private service:SharedService,private router: Router,) { }
  ModelList:any=[];
  ModalTitle: string="";
  mod:any;
  
  ngOnInit(): void {
    
    this.refreshModelList()
    
  }

  addClick(){
    this.mod={
      ModelId:0,
      ModelName:"",
      BrandName:"",
      Quantity:"",
    }
    this.ModalTitle="Add Model";
    this.ActivateAddEditModelComp=true;

  }

  editClick(item: any, ){
    this.mod=item;
    this.ModalTitle="Edit Model";
    this.ActivateAddEditModelComp=true;
  }
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletemodel(item.ModelId).subscribe(data=>{
        alert(data.toString());
        this.refreshModelList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditModelComp=false;
    this.refreshModelList();
  }

  refreshModelList(){
    this.service.getmodelList().subscribe(data=>{
      this.ModelList=data;
      console.log(this.ModelList) 
    });
  }

}
