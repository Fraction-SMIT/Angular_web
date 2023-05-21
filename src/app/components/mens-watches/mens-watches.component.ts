import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-mens-watches',
  templateUrl: './mens-watches.component.html',
  styleUrls: ['./mens-watches.component.css']
})
export class MensWatchesComponent {


  constructor(private router: Router, private postService: PostService) { }

  
  mensWactchList: any;
  error = "";

  ngOnInit(): void {

    this.postService.getMensWatches().subscribe(res => {
      debugger;
      this.mensWactchList = res;
    }, (error) => {
      this.error = error;
    });


    this.mensWactchList  = [{
      "id":1,
      "productDescription":"Timex White Dial Men's Watch -TW4B16400",
      "cost":3495,
      "image":"assets/img/featured1.png"
  },{
      "id":2,
      "productDescription":"Casio G-Shock Black Dial Mens Watch-G270",
      "cost":9495,
       "image":"assets/img/featured2.png"
  },{
      "id":3,
      "productDescription":"Casio G-Shock Black Dial Mens Watch-G272",
      "cost":9495,
       "image":"assets/img/featured3.png"
  },{
      "id":4,
      "productDescription":"Casio G-Shock Black Dial Mens Watch-G317",
      "cost":10995,
       "image":"assets/img/new1.png"
  }];




  }

  // onEditUser(user: any) {
  //   this.router.navigateByUrl("views/user/edituser/" + user.UserId);
  // }


  // onClose(event: any) {
  //   this.error = "";
  // }

}
