import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle = "leetcode";
  }
  async getHtml() {
    return `
          <h1>This is leetcode Page</h1>
          <hr>
      `;
  }
}