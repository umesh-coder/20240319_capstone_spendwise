import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class groupService {
  private baseUrl = 'http://localhost:2000/group';

  constructor(private http: HttpClient) {}

  createGroup(data: any): Observable<any> {
    // Retrieve the token from local storage
    const token = sessionStorage.getItem('LEAD_ID');

    // Set the token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Token : == ' + token);

    // Send the HTTP request with the token in the headers
    return this.http.post<any>(`${this.baseUrl}/creategroup`, data, {
      headers,
    });
  }

//   showAllGroups(data: any): Observable<any> {
//     // Retrieve the token from local storage
//     const token = sessionStorage.getItem('LEAD_ID');

//     // Set the token in the request headers
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     console.log('Token : == ' + token);

//     // Send the HTTP request with the token in the headers
//     return this.http.get<any>(`${this.baseUrl}/`, data, {
//       headers,
//     });
//   }
}
