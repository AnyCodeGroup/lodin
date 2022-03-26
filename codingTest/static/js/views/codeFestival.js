import AbstractView from "./AbstractView.js";
import { u } from '../lib.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle = "codeFestival";
  }
  async getHtml() {
    return `
          <h1>This is codeFestival Page</h1>
          <hr>
          <h2> 교안 </h2>
          <p class="mid"><a target="_blank" href="http://www.paullab.co.kr/codefestival.html">제주 코딩 베이스캠프 </a></p>
          <p class="mid"><a target="_blank" href="http://www.paullab.co.kr/codeFestival_js_1.pdf">js 100제(1~50)</a></p>
          <p class="mid"><a target="_blank" href="http://www.paullab.co.kr/codeFestival_js_2.pdf">js 100제(51~100)</a> </p>
          <hr>
          <ul>
          <li>
            <a href="${u('/codeFestival/1')}" data-link>#1 - test1</a>
          </li>
          <li>
            <a href="${u('/codeFestival/2')}" data-link>#2 - test2</a>
          </li>
        </ul>
      `;
  }
}