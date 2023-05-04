import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  // Inject the Post Service as a Dependency
  constructor(private postService: PostService)  {}

  ngOnInit() {
      this.postService.getPosts().subscribe(posts => {
        // console.log(posts);
        this.posts = posts;
      })
  }
}
