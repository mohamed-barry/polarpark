export namespace TDC {
  export interface Seat {
    section: number;
    row: number;
    seat: number;
  }

  export interface Ticket {
    active: boolean;
    barcode: string;
    id: number;
    patronId: number;
    seat: Seat;
  }

  export interface LineItem {
    event: Event;
    id: number;
    tickets: Array<Ticket>;
  }

  export interface Event {
    id: number;
    publicDescription: string;
    shortPublicDescription: string;
    date: string;
  }
}
