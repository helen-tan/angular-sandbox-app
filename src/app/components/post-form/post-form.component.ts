import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter;
  @Input() currentPost: Post = { id: 0, title: '', body: ''};;

  // Inject the Post Service as a Dependency
  constructor(private postService: PostService) {}

  ngOnInit() {
      
  }

  addPost(title: String, body: String) {
    // console.log(title, body);
    if (!title || !body) {
      alert("Please add posts");
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        //console.log(post);

        // Emit an event from this component, and include the new post
        this.newPost.emit(post);
      })
    }
  }
}
