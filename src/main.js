import PointsModel from './model/point-model.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render } from './framework/render.js';


const pageHeaderElement = document.querySelector('.page-header');
const filtersElement = pageHeaderElement.querySelector('.trip-controls__filters');
const pageMainElement = document.querySelector('.page-main');
const pageBodyContainerElement = pageMainElement.querySelector('.page-body__container');


const pointsModel = new PointsModel();
pointsModel.init();

const boardPresenter = new BoardPresenter({
  boardContainer: pageBodyContainerElement,
  pointsModel});

render(new FilterView, filtersElement);
boardPresenter.init();
