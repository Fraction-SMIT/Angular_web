import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form!: NgForm

  constructor(private router: Router) { }

  model: any = {};

  ngOnInit(): void {
  }



  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.model)
    if (this.model.email !== "" && this.model.password !== "") {
      this.router.navigateByUrl("views/dashboard");
    }

  }

}
