import { render } from '../render.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventAddView from '../view/event-add-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';
import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';


export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventListView();
  eventItemComponent = new EventItemView();

  componentsList = [new EventEditView(), new EventAddView(), new EventView(), new EventView(), new EventView()];

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init () {
    while (this.boardContainer.firstChild) {
      this.boardContainer.removeChild(this.boardContainer.firstChild);
    }
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());

    for (let i = 0; i < 5; i++) {
      const eventItem = new EventItemView();
      render(eventItem, this.eventListComponent.getElement());
      render (this.componentsList[i], eventItem.getElement());
    }
  }
}

