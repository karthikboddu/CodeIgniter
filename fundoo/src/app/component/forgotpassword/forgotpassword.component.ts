import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  errormsg: string = "";
  submitted = false;

  /**
   * 
   * @param formBuilder 
   * @param loginservice 
   */
  constructor(private formBuilder: FormBuilder, private loginservice: LoginService) { }
  loginform: FormGroup;
  ngOnInit() {
    this.loginform = this.formBuilder.group({
      Emailid: [null, [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });

  }

  /**
   * @description method to call service and return response
   * @method submitForm()
   * @param value 
   */
  submitForm(value: any) {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
    debugger;
    let status = this.loginservice.forgotpass(value);
    status.subscribe((res: any) => {
      debugger;
      if (res.message == "200") {
        this.errormsg = "reset link sent to your mail";
      } else {
        this.errormsg = "mail not registered";
      }
    });

  }


}


