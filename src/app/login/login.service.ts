import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
// import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }

  // Get all users
  getUsers(): Observable<any[]> {
    return this.firestore.collection<any>('/users').valueChanges({ idField: 'uid' });
  }

  // Get a single user
  getUserByEmailAndPassword(email: string, password: string): Observable<any | undefined> {
    return this.firestore.collection('/users', ref => ref.where('email', '==', email).where('password', '==', password))
      .valueChanges()
      .pipe(
        map(users => users.length > 0 ? users[0] : undefined)
      );
  }

  // Add a new user
  addUser(user: any): Promise<void> {
    const userId = user.uid;
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

  // login(email: string, password: string) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // logout() {
  //   return signOut(this.auth);
  // }
}
