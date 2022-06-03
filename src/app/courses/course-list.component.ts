import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent {

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular: Forms',
      imageUrl: '/assets/images/forms.png',
      price: 99.99,
      code: 'XPS-8796',
      duration: 120,
      rating: 4.2,
      releaseDate: 'December, 2, 2019'
    },
    {
      id: 2,
      name: 'Angular: http',
      imageUrl: '/assets/images/http.png',
      price: 50.00,
      code: 'LKL-1296',
      duration: 80,
      rating: 5,
      releaseDate: 'December, 10, 2019'
    }
  ]

}
