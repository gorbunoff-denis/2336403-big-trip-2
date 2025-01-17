import { render } from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventAddView from '../view/event-add-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';
import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import { getDefaultPoint } from '../const.js';


export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventListView();
  eventItem = new EventItemView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init () {
    this.boardContainer.innerHTML = '';
    this.boardPoints = [...this.pointsModel.getPoints()];
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());
    render(this.eventItem, this.eventListComponent.getElement());
    
    render(this.eventItem, this.eventListComponent.getElement());
    render(new EventAddView(getDefaultPoint()), this.eventItem.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(this.eventItem, this.eventListComponent.getElement());
      render (new EventView(this.boardPoints[i]), this.eventItem.getElement());
    }

    render(this.eventItem, this.eventListComponent.getElement());
    render(new EventEditView(this.boardPoints[0]), this.eventItem.getElement());
  }
}
