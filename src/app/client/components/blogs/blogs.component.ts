import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogInterface } from './blog-interface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsList: BlogInterface[] = [
    {
      title: 'Well+Good',
      description:
        'In 2010, Well+Good was created by two journalists as a news publication platform entirely devoted to health and wellness. The site brings news, articles, and videos to demystify the wellness world. The website is known for its top-level reporting and trend spotting. They quickly take on the latest trends in the wellness world and deliver a tell-all approach based on facts and expert knowledge. Fast-forward a decade and Well+Good has become a top source on boutique fitness, health, and all things wellness. ',
      image: '/assets/images/blogs/blog-1.jpg',
      link: '',
      day: 25,
      month: 'Jun',
    },
    {
      title: 'Ronnie Coleman ',
      description:'I haven`t won a lot of wars, you know. I have had a few here and there but lifetime achievement and then being presented by Arnold also, somebody you look up to, idolize in a was, it was a quite blood reaching experience.When you rehearse something, you rehearse it so it’s easy. You’re just by yourself and you’re not thinking about it because you’re rehearsing it, you know. But once you get up there and all those people in front of you and then you get caught up in the moment.',
      image: '/assets/images/blogs/blog-2.jpg',
      link: '',
      day: 25,
      month: 'Jun',
    },
    {
      title: 'Born Fitness',
      description:
        'Born Fitness is a big source for health and fitness. The blog aims to take the stress out of health, fitness, and nutrition. They have a no-hype, straightforward tone that delivers informative yet engaging content. Founder of Born Fitness Adam Bornstein works with world-class fitness experts to deliver clear and helpful answers. It’s about finding solutions to your needs and accessing jargon-free information. Born Fitness is designed for real people who want expert advice in a simple, easy-to-digest format.  ',
      image: '/assets/images/blogs/blog-3.jpg',
      link: '',
      day: 25,
      month: 'Jun',
    },
    {
      title: 'Love Sweat Fitness',
      description:
        'Love Sweat Fitness was founded in 2014 by Katie Dunlop. Katie started the site as she was passionate about fitness and helping women. What’s different about Love Sweat Fitness is that the site majorly focuses on community. She aims to build friendships and a powerful community to support other people’s health and fitness. The blog splits up the content into fitness, nutrition, healthy lifestyle, travel, and printables. With plenty of healthy recipes, fitness challenges, and even an app, Love Sweat Fitness aims to make fitness a community event. ',
      image: '/assets/images/blogs/blog-4.jpg',
      link: '',
      day: 25,
      month: 'Jun',
    },
    {
      title: 'Breaking Muscle',
      description:
        'Breaking Muscle is an online platform that provides high-quality fitness content all backed up by scientific facts. The blog is super versatile and is seen as an expert source in the fitness world. This means that the blog commands an audience of consumers, professionals, and fitness enthusiasts. Content is clearly separated on the blog for trainers and coaches as well as consumers. The blog features a lot of different content such as reviews, videos, workout routines, fitness articles, and product reviews. It’s also a great source for bodybuilders with plenty of advice on bodybuilding and how to grow muscle.  ',
      image: '/assets/images/blogs/blog-5.jpg',
      link: '',
      day: 5,
      month: 'Jun',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-caret-left"></i>',
      '<i class="fa fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
