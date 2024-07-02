import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  array=[
      {name:"Sudipa", isSingle:"Khai",Job:"Intern", salary:10000},
      {name:"Ishana", isSingle:"Absolutely",Job:"Intern",salary:11000}
    ]
}
