import HikeOutput from './hikeOutput.js';
import HikesView from './hikesView.js';

export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeOutput = new HikeOutput();
    this.hikesView = new HikesView(parentId);
  }
  showHikeList() {
    const hikeList = this.hikeOutput.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikeList);
  }
}