import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from 'src/app/services/counter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
  providers: [CounterService],
})
export class CreateuserComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    public counterService: CounterService
  ) {}

  submitted = false;
  userList: any = [];
  currentDate = new Date();
  searchInput = '';
  value = 0;
  data: any = [];
  userId = '';
  isEditUser = false;
  editUserData: any;

  ngOnInit(): void {
    this.userId = this.activatedroute.snapshot.params['id'];

    if (this.userId != '' && this.userId != undefined) {
      this.isEditUser = true;
      this.userService.getUserData(+this.userId).subscribe((res) => {
        this.editUserData = res[0];
      });
    }

    let value = sessionStorage.getItem('userList');
    if (value) {
      let sessionList = JSON.parse(value);
      this.userList = sessionList;
    } else {
      this.userList = [];
    }
  }

  userRegistration = this.fb.group({
    firstname: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z]*'),
      ],
    ],
    lastname: '',
    email: '',
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    address: '',
    mobileno: 0,
    city: '',
    state: '',
    country: '',
    pincode: 0,
    dob: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    gender: '',
    skills: this.fb.array([this.newSkill()]),
  });

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  get skills(): FormArray {
    return this.userRegistration.get('skills') as FormArray;
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  setUserRegistration() {
    //this.onReset();
    let contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      password: '12345678',
      confirmPassword: '12345678',
      address: 'No.10 Maxi Street',
      mobileno: 7098584564,
      city: 'Mumbai',
      state: '1',
      country: '1',
      pincode: 501265,
      dob: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      gender: 'male',
      skills: [
        {
          skill: 'Angular',
          exp: '10',
        },
      ],
    };

    this.userRegistration.setValue(contact);
  }

  patchUserRegistration() {
    //this.onReset();
    let contact = {
      dob: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    };

    this.skills.controls[0].setValue({
      skill: 'Angular',
      exp: '10',
    });
    this.userRegistration.patchValue(contact);
  }

  onReset() {
    this.submitted = false;
    this.skills.clear();
    this.addSkills();
    this.userRegistration.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.userRegistration.valid) {
      this.userList = [...this.userList, this.userRegistration.value];
      sessionStorage.setItem('userList', JSON.stringify(this.userList));
      alert('User Added Successfully');
    }
  }
}
