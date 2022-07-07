import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent implements OnInit {
  name:string='';
  error:Boolean=false;
  selectedvalue:string='India'
  constructor() { }

  ngOnInit(): void {
  }
  OnChangeName(e:any){
    console.log(e)
    if(e.trim().length==0)
      this.error=true;
    else 
      this.error=false;
    this.name=e;
  }

  submit(){
    if(!this.error && this.name.trim().length!=0)
    alert("Form submitted!")
  }
}

