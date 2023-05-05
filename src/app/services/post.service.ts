import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  // Inject Http client as a Dependency
  constructor(private http: HttpClient) { }

  // Returns an Observable
  getPosts(): Observable<Post[]> {
    // GET request
    return this.http.get<Post[]>(this.postUrl);
  }

  savePost(post: Post): Observable<Post> {
    // POST request
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    // PUT request
    const url = `${this.postUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;

    return this.http.get<Post>(url);
  }
}
