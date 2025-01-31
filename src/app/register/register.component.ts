import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as UserActions from '../store/user-store/user.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

    userForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {
        this.userForm = this.fb.group({
        name: ['', Validators.required, Validators.maxLength(50)],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        });

    }

    onSubmit(){

        if(this.userForm.valid){
            this.store.dispatch(UserActions.addUser({user: this.userForm.value}));
        }

    }

}
