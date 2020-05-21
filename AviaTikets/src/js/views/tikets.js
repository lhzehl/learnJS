class TicketsUI {
  constructor() {
    this.container = document.querySelector(".tickets-sections .row");
  }
  renderTickets(tickets) {
    this.clearContainer();
    if (!tickets.length) {
      this.showEmptyMsg();
      return;
    }
    let fragment = "";
    tickets.forEach((ticket) => {
      const template = TicketsUI.ticketTemplate(ticket);

    });
  }
  clearContainer() {
    this.container.innerHTML = "";
  }
  showEmptyMsg() {
    const template = TicketsUI.emptyMsgTemplate();
    this.container.insertAdjacentHTML(template);
  }
  static emptyMsgTemplate() {
    return `<div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
    </div>`;
  }
  static ticketTemplate(ticket) {
      return `<div class="col s12 m6">
      <div class="card ticket-card">
        <div class="ticket-airline d-flex align-items-center">
          <img
            src="${ticket.airline_logo}"
            class="ticket-airline-img"
          />
          <span class="ticket-airline-name"
            >${ticket.airline_name}</span
          >
        </div>
        <div class="ticket-destination d-flex align-items-center">
          <div class="d-flex align-items-center mr-auto">
            <span class="ticket-city">${ticket.origin_name}</span>
            <i class="medium material-icons">flight_takeoff</i>
          </div>
          <div class="d-flex align-items-center">
            <i class="medium material-icons">flight_land</i>
            <span class="ticket-city">${ticket.depature_name}</span>
          </div>
        </div>
        <div class="ticket-time-price d-flex align-items-center">
          <span class="ticket-time-departure">14 Sep 2019 02:30</span>
          <span class="ticket-price ml-auto">$315</span>
        </div>
        <div class="ticket-additional-info">
          <span class="ticket-transfers">Пересадок: 1</span>
          <span class="ticket-flight-number">Номер рейса: 26</span>
        </div>
      </div>
    </div>`
  }
}
const ticketsUI = new TicketsUI();

export default ticketsUI;
