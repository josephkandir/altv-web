import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _articles: Article[] = [
    new Article(
      'cant-shed-those-Gym-The-problem-might-be-in1', 
      'lifestyle', 
      'health', 
      'Can\'t shed those Gym? The problem might be in', 
      'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/health/health1.jpg', 
      '', 
      new Date('2021/07/15 10:15:37'), 
      new Date('2021/07/15 13:04:02'), 
      'Joseph Kandir', 
      'Premjit Bodra', true
    ),
    new Article(
      'smart-packs-parking-sensor-tech-and-beeps2', 
      'lifestyle', 
      'health', 
      'Smart packs parking sensor tech and beeps', 
      'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/health/health2.jpg', 
      '', 
      new Date('2021/07/15 10:15:37'), 
      new Date('2021/07/15 13:04:02'), 
      'Joseph Kandir', 
      'Premjit Bodra', true
      ),
      new Article(
        'deleting-fears-from-the-brain-means-you-might-never3', 
        'lifestyle', 
        'health', 
        'Deleting fears from the brain means you might never', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/health/health3.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'tourism-in-Dubai-is-booming-by-international-tourist4', 
        'lifestyle', 
        'food', 
        'Tourism in Dubai is booming by international tourist', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/foods/food1.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'tourism-in-Dubai-is-booming-by-international-tourist5', 
        'lifestyle', 
        'food', 
        'Tourism in Dubai is booming by international tourist', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/foods/food2.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'tourism-in-Dubai-is-booming-by-international-tourist6', 
        'lifestyle', 
        'food', 
        'Tourism in Dubai is booming by international tourist', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/foods/food3.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in7', 
        'lifestyle', 
        'fashion', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/tech/tech1.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in8', 
        'lifestyle', 
        'fashion', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/tech/tech2.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in9', 
        'lifestyle', 
        'fashion', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/tech/tech3.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in10', 
        'lifestyle', 
        'travel', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/travel/travel2.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in11', 
        'lifestyle', 
        'travel', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/travel/travel3.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      ),
      new Article(
        'cant-shed-those-Gym-The-problem-might-be-in12', 
        'lifestyle', 
        'travel', 
        'Can\'t shed those Gym? The problem might be in', 
        'article', 'E:\Learn\angular-project\angular-altv\src\assets\images/news/travel/travel4.jpg', 
        '', 
        new Date('2021/07/15 10:15:37'), 
        new Date('2021/07/15 13:04:02'), 
        'Joseph Kandir', 
        'Premjit Bodra', true
      )
  ];

  constructor() { }

  getArticles(): Article[] {
    return this._articles.slice().filter(m => m.articleStatus === true);
  }
}
