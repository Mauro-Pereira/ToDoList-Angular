import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user/user';
import * as UserActions from '../store/user-store/user.actions';
import { Store } from '@ngrx/store';
import { selectLoading, selectUsers } from '../store/user-store/user.selectors';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

    user$: Observable<User[]>;
    loading$: Observable<boolean>;

    constructor(private store: Store) {
        this.user$ = this.store.select(selectUsers);
        this.loading$ = this.store.select(selectLoading);
    }

    ngOnInit(): void {
        this.store.dispatch(UserActions.loadUsers());
    }

}
