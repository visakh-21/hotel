import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import{ getResturentData} from './resturent.model'

@Component({
  selector: 'app-resturent-dash',
  templateUrl: './resturent-dash.component.html',
  styleUrls: ['./resturent-dash.component.css']
})
export class ResturentDashComponent implements OnInit {
  formValue!: FormGroup
  resturentModelObj:getResturentData=new getResturentData
  allresturantData:any=[]
  constructor(private formBuilder: FormBuilder,private api:ApiService) {

  }

  ngOnInit(): void {
     this.getAllData();
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
    //subscribing our data
   this.getAllData()

  
  }
 
  addResto()
    {
this.resturentModelObj.name=this.formValue.value.name;
this.resturentModelObj.email=this.formValue.value.email;
this.resturentModelObj.mobile=this.formValue.value.mobile;
this.resturentModelObj.address=this.formValue.value.address;
this.resturentModelObj.address=this.formValue.value.address;


this.api.postResturent(this.resturentModelObj).subscribe(res=>{
console.log(res);

  alert("resturant record added sucessfully")
  let ref=document.getElementById('clear');
  ref?.click();
  this.formValue.reset()
  this.getAllData();
},
err=>{

  alert("no records")
}
)



    }
getAllData()
{

  this.api.getResturent().subscribe((res)=>{
    console.log("$##################################################");
    
    this.allresturantData=res;
    console.log(this.allresturantData);
    

  })

}
deleteRest(data:any)
{
this.api.deleteResturent(data.id).subscribe(res=>{

  alert("resturant records deleted")
  this.getAllData();
})
  
}
onEditResto(data:any)
{
  this.resturentModelObj.id=data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['name'].setValue(data.email);
  this.formValue.controls['name'].setValue(data.mobile);
  this.formValue.controls['name'].setValue(data.address);
  this.formValue.controls['name'].setValue(data.services);

}
updateResto(){

  this.resturentModelObj.name=this.formValue.value.name;
this.resturentModelObj.email=this.formValue.value.email;
this.resturentModelObj.mobile=this.formValue.value.mobile;
this.resturentModelObj.address=this.formValue.value.address;
this.resturentModelObj.address=this.formValue.value.services;

this.api.updateResturent(this.resturentModelObj,this.resturentModelObj.id).subscribe(res=>{

  alert("resturent records updated");
  let ref=document.getElementById('clear');
  ref?.click();
  this.formValue.reset()
  this.getAllData();
})

}


}