import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,) { }
   logIn=async (email: string, password: string)=>{
    return await this.afAuth.signInWithEmailAndPassword(email,password)
 }
 getUser=()=>{
   return this.afAuth.authState
 }


}
