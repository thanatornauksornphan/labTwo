import { Component } from '@angular/core';
import { slideInAnimation } from '../app.animation';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: [slideInAnimation],
})
export class RegisterComponent {

}
