import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class ErrorHandlingService {
  constructor(private toaster: ToastrService) { }
  public DisplayErrors(message) {
    this.toaster.error(message);
  }
}
