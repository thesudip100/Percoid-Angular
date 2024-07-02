import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';


function formatName(value:string){
   return "hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  

    @Input({alias:"name", transform:formatName}) aliasname="";
    @Input() isSingle=""
    @Input({transform:numberAttribute}) salary?:number;
}
