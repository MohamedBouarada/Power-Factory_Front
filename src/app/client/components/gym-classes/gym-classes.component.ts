import { Component, OnInit } from '@angular/core';
import { GymClassInterface } from './gym-class-interface';
import * as Aos from 'aos';
import { CourseService, ICourse } from '../../../course.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gym-classes',
  templateUrl: './gym-classes.component.html',
  styleUrls: ['./gym-classes.component.scss'],
})
export class GymClassesComponent implements OnInit {
  listOfClasses: GymClassInterface[] = [
    {
      id:"1",
      name: 'cardio',
      description:
        'Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.',
      photos: [{id:"2",url:'/assets/images/classes/cardio.jpg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"2",
      name: 'strength',
      description:
        'Rise to the challenge with GoodLife’s Strength Classes. Build muscle, achieve your weight loss goals and maintain bone density, no matter your fitness level.',
      photos: [{ id: '1', url: '/assets/images/classes/strength.jpg' }],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"3",
      name: 'mind and body',
      description:
        "Put your mind at ease and get a full-body workout with GoodLife's Mind & Body Classes. Try everything from Hot Yoga to Pilates and sweat your way to a healthy state of mind.",
      photos: [{id:"1",url:'/assets/images/classes/mindAndBody.jpg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"4",
      name: 'cycling',
      description:
        'Our dynamic, low-impact Cycling Classes are set to motivating music and take you through a variety of sprints, hills and valleys designed to build endurance and burn calories.',
      photos: [{id:"1",url:'/assets/images/classes/cycling.jpg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"3",
      name: 'aqua',
      description:
        'GoodLife’s low-impact, high-energy Aqua Fitness Classes blend safe yet challenging cardio conditioning and full-body toning to give you an efficient workout in the pool. You might not see the sweat, but you’ll feel the burn. ',
      photos: [{id:"1",url:'/assets/images/classes/aqua.jpg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"3",
      name: 'dance',
      description:
        'Move and groove your way to a healthier body and mind. GoodLife’s Dance Fitness Classes are a combination of high-energy music and easy-to-follow dance moves that’ll leave you wanting more. ',
      photos: [{id:"1",url:'/assets/images/classes/dance.jpeg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"3",
      name: 'HIIT & ATHLETIC ',
      description:
        'Train like an athlete with GoodLife’s High Intensity Interval Training (HIIT) & Athletic Classes. Each class combines cardio and strength training to maximise results, improve aerobic conditioning and challenge you in new and exciting ways. ',
      photos: [{id:"1",url:'/assets/images/classes/hiit.jpeg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
    {
      id:"3",
      name: 'FLEXIBILITY & MOBILITY',
      description:
        'Flexibility & Mobility Classes are designed to lengthen and strengthen muscles, release tension and promote joint mobility and stability, leaving you feeling restored.',
      photos: [{id:"1",url:'/assets/images/classes/flexibility.jpeg'}],
      date: 'Nov 12 2021',
      time: '5:30 PM',
      createdAt:"",
      updatedAt:"",
      deletedAt:null,
    },
  ];

  imageBaseUrl=environment.apiBaseUrl ;
  dataBaselistOfClasses:ICourse[]=[]
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (response) => {
        console.log(response.data);
        this.dataBaselistOfClasses=response.data
        // response.data.forEach((course) => this.listOfClasses.push(course));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showMore: boolean = false;
  numberOfClassesShown: number = 4;
  showMoreClasses() {
    if (this.showMore) {
      this.numberOfClassesShown = 4;
    } else {
      this.numberOfClassesShown = this.listOfClasses.length;
    }
    this.showMore = !this.showMore;
  }
}
