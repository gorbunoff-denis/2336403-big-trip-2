import AbstractView from '../framework/view/abstract-view.js';

function createEmptyListTemplate() {
  return ('<p class="trip-events__msg">Click New Event to create your first point</p>');
}

export default class EventEmptyView extends AbstractView {
  get template() {
    return createEmptyListTemplate();
  }
}
