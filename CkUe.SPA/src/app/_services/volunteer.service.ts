import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  uri='http://localhost:3000/api/user';
  
  private users: User[] = [];
  private usersUpdated = new Subject<{ users: User[]; usersCount: number }>();
  private usersSub = new Subject<{users: User[], message: string}>();


  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
      .get<{ message: string; users: any }>(
        "http://localhost:3000/api/user/get-users"
      )
      .subscribe(result => {
        console.log(result.users);
        this.users = result.users;
        this.usersSub.next({
          users: result.users,
          message: result.message
        });
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUsersListener() {
    return this.usersSub.asObservable();
  }

  getUser(id: string) {
    return this.http.get<{
      _id: string;
      creator: string;
      firstname: string;
      lastname: string;
      phone: string;
      email: string;
      livingPlace: string;
      livingAddress: string;
      schoolFaculty: string;
      job: string;
      birthPlace: string;
      dob: Date;
      volunteeringStartDate: Date;
      recommended: string;
      uvn: string;
      accessRights: number;
      imagePath: string;
    }>(`${this.uri}/${id}`);
  }

  addUser(data: any) {
    const userData = new FormData();
    userData.append("_id", data.id);
    userData.append("firstname", data.firstname);
    userData.append("lastname", data.lastname);
    userData.append("phone", data.phone);
    userData.append("email", data.email);
    userData.append("livingPlace", data.livingPlace);
    userData.append("livingAddress", data.livingAddress);
    userData.append("schoolFaculty", data.schoolFaculty);
    userData.append("job", data.job);
    userData.append("birthPlace", data.birthPlace);
    userData.append("dob", data.dob);
    userData.append("volunteeringStartDate", data.volunteeringStartDate);
    userData.append("recommended", data.recommended);
    userData.append("uvn", data.uvn);
    userData.append("password", data.password);
    userData.append("accessRights", data.accessRights);
    userData.append("image", data.image, data.uvn);
    this.http
      .post<{ message: string; user: User }>(
        `${this.uri}/create-user`,
        userData
      )
      .subscribe(responseData => {
        this.router.navigate(["/"]);
      });
  }

  updateUser(data: any) {
    let userData: User | FormData;
    if (typeof data.image === "object") {
      userData = new FormData();
      userData.append("_id", data.id);
      userData.append("firstname", data.firstname);
      userData.append("lastname", data.lastname);
      userData.append("phone", data.phone);
      userData.append("email", data.email);
      userData.append("livingPlace", data.livingPlace);
      userData.append("livingAddress", data.livingAddress);
      userData.append("schoolFaculty", data.schoolFaculty);
      userData.append("job", data.job);
      userData.append("birthPlace", data.birthPlace);
      userData.append("dob", data.dob);
      userData.append("volunteeringStartDate", data.volunteeringStartDate);
      userData.append("recommended", data.recommended);
      userData.append("uvn", data.uvn);
      userData.append("accessRights", data.accessRights);
      userData.append("image", data.image, data.uvn);

    } else {
      // userData = {
      //   firstname: data.firstname,
      //   lastname: data.lastname,
      //   phone: data.phone,
      //   email: data.email,
      //   livingPlace: data.livingPlace,
      //   livingAddress: data.livingAddress,
      //   schoolFaculty: data.schoolFaculty,
      //   job: data.job,
      //   birthPlace: data.birthPlace,
      //   dob: data.dob,
      //   volunteeringStartDate: data.volunteeringStartDate,
      //   recommended: data.recommended,
      //   uvn: data.uvn,
      //   accessRights: data.accessRights,
      //   imagePath: data.image,
      // };
    }
    this.http
      .put("http://localhost:3000/api/users/update-user/" + data.id, userData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http.delete("http://localhost:3000/api/posts/" + postId);
  }

}
