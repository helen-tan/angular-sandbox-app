import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = { id: 0, title: '', body: '' };

  // Dependency injection
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    // Get id from url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(id);

    // Use service method to make req to API to get single post by id
    this.postService.getPost(id).subscribe(post => { // set post to the post returned from the GET req (so that it can be accessed from the template)
      this.post = post;
    });
  }
}
