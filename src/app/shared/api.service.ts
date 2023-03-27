import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import { getResturentData } from '../resturent-dash/resturent.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // updateResturent(resturentModelObj: getResturentData) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http:HttpClient) { }
postResturent(data:any){

  return this.http.post<any>("http://localhost:3000/comments",data).pipe(map((res:any)=>{

  return res;
  }))
}


getResturent(){

  return this.http.get<any>("http://localhost:3000/comments").pipe(map((res:any)=>{
return res;
  }))
}
updateResturent(data:any,id:number){

  return this.http.put<any>("http://localhost:3000/comments/"+id,data).pipe(map((res:any)=>{
return res;
  }))
}
deleteResturent(id:number)
{
  return this.http.delete<any>("http://localhost:3000/comments/"+id).pipe(map((res:any)=>{
    return res;
      })) 
}
}
