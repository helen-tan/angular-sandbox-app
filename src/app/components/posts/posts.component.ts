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
  currentPost: Post = { id: 0, title: '', body: ''};
  isEdit: boolean = false;

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


  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if(post.id === cur.id) {
        this.posts.splice(index, 1); // Remove the outdated post
        this.posts.unshift(post);    // Make the post we updated move to the top
        this.isEdit = false;         // Set isEdit to false, then isEdit will be passed down to the child post.form component template
        this.currentPost = { id: 0, title: '', body: ''} // Clear ut the inputs
      }
    })
  }
}
