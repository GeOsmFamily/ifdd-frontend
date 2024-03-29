import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../auth.service';
import { passwordsMatchValidator } from '../passwords-match.directive';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: FormGroup = new FormGroup(
    {
      name: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', Validators.required),
      password1: new FormControl<string>('', Validators.required),
      password2: new FormControl<string>('', Validators.required),
    },
    { validators: passwordsMatchValidator }
  );
  loading: boolean = false;
  errorMessage: string = '';
  errors: any = {};

  constructor(private router: Router, private auth: AuthService) {}

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.loading = true;
    this.auth
      .register(
        this.form.value.name,
        this.form.value.email,
        this.form.value.password1
      )
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (token) => {
          this.auth.login(token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errors = error?.error?.data;
        },
      });
  }
}
