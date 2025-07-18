class Reservation {
  constructor(firstName, lastName, type) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.type = type;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getType() {
    return this.type;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setType(type) {
    this.type = type;
  }
}

class Meeting {
  constructor() {
    this.apacity = 0;
    this.reservations = [];
  }

  setCapacity(capacity) {
    this.apacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  getReservations() {
    return this.reservations;
  }

  checkMeetingAvailability() {
    const physicalCount = this.reservations.filter(
      (r) => r.getType() === "physical"
    ).length;
    return physicalCount < this.capacity;
  }

  reserveMeeting(data) {
    const { firstName, lastName, type } = data;
    const reservation = new Reservation(firstName, lastName, type);

    if (type === "physical" && !this.checkMeetingAvailability()) {
      return false;
    }

    this.reservations.push(reservation);
    return true;
  }
}
