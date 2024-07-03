import { CommonModule } from '@angular/common';
import { Component,numberAttribute, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
// import { EventEmitter } from 'eventemitter3';


function formatName(value:string){
   return "hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
    // name="sudip"
    // status="single"
    // salary=20000
    // isBtnDisabled=false
    // inputValue="Input text"
    // array=[
    //   {name:"Sudip", isSingle:"Khai",Job:"Intern", salary:10000},
    //   {name:"Ishan", isSingle:"Absolutely",Job:"Intern",salary:11000}
    // ]

    // onChange(e:Event)
    // {
    //   const value= (e.target as HTMLInputElement).value
    //   this.inputValue=value                    //two way binding
    // }

    // onBtnClk()
    // {
    //   console.log("The button is clicked")
    // }
  

    @Input({alias:"name"}) aliasname="";
    @Input() isSingle=""
    @Input({transform:numberAttribute}) salary?:number;
    

    //passing child to parent data
    @Output() emitter= new EventEmitter<User>()
    sendData()
    {
      this.emitter.emit({name:this.aliasname,newSalary:10000})
    }
}

