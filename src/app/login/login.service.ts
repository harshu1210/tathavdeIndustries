import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private saltRounds = 10;

  constructor(private firestore: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router) { }

  // Get all users
  getUsers(): Observable<any[]> {
    return this.firestore.collection<any>('/users').valueChanges({ idField: 'uid' });
  }

  // Get a single user
  getUserByEmail(email: any): Observable<any | undefined> {
    return this.firestore.collection('/users', ref => ref.where('email', '==', email))
      .valueChanges()
      .pipe(
        map(users => users.length > 0 ? users[0] : undefined)
      );
  }

  // Add a new user
  addUser(user: any): Promise<void> {
    const userId = this.firestore.createId();
    return this.firestore.collection('/users').doc(userId).set(user);
  }

  // Update a user
  updateUser(userId: string, user: Partial<any>): Promise<void> {
    return this.firestore.collection('/users').doc(userId).update(user);
  }

  // Delete a user
  deleteUser(userId: string): Promise<void> {
    return this.firestore.collection('/users').doc(userId).delete();
  }

  loginWithEmailPassword(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      window.alert("Login SuccessFully")
      this.router.navigate(['/products'])
    }, error => {
      window.alert("Not able to SignIn Currently")
      this.router.navigate(['/login']);
    })
  }

  createUser(user: any) {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then(()=>{
      this.addUser({"firstName":user.firstName,"lastName":user.lastName,"email":user.email,"role":user.role});
      window.alert("Created User Sucessfully");
    },error=>{
      if(error.code == "auth/email-already-in-use"){
        window.alert("User Already Exsists")
      }else{
        window.alert("Server is Currently Busy")
      }
    })
  }
}
