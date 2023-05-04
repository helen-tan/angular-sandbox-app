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

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  // 1. POST req to API
  // 2. Data of new POST is returned
  // 3. Event emitter from the post-form component is sent to posts component
  // 4. Event emitted is caught in onNewPosts method and post is added to the list
}
