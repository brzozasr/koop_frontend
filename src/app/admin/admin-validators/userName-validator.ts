import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {UsersService} from '../admin-services/users.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniqueUserNameValidator implements AsyncValidator {
  constructor(private userService: UsersService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    console.log('Validating user name ...');
    return this.userService.CheckUsername(control.value).pipe(
      map(result => result.result ? {uniqueUsername: true} : null),
      catchError(() => of(null))
    );
  }
}
