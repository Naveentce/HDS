
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

	constructor(private http:HttpClient) { }

	doLogin(data){
		if (data.email == "admin@yopmail.com" && data.password == "admin123") {
			return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

	public doLoginTest<T>(data): Observable<T> {
        return this.http.get<T>('http://localhost:8085/doLogin');
    }

	// doRegister(data){
		// 	return this.http.post('user-add.php',data);	
		// }
	}
