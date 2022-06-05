import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})

export class CourseInfoComponent implements OnInit {

  course!: Course;
  success: boolean = false;

  constructor(private activatedRoute: ActivatedRoute
    , private courseService: CourseService
    , private router: Router) { }

  ngOnInit() {
    this.course = this.courseService.retrieveById(
      +this.activatedRoute.snapshot.paramMap.get('id')!
    );
  }

  save(): void {
    this.courseService.save(this.course);
    this.success = true;
    setTimeout(() =>
    {
      this.router.navigate(['/courses']);
    },
    2000);
  }
}
