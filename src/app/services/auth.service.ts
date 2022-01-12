import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,) { }
   logIn=async (email: string, password: string)=>{
    return await this.afAuth.signInWithEmailAndPassword(email,password)
 }


}
