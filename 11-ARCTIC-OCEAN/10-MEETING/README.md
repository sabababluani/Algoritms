# Meeting Management Module

This module is designed to manage meeting reservations and their availability. It allows setting meeting capacity, handling reservations for both **online** and **physical** types, and ensures capacity rules are enforced correctly.

---

## Classes

### 🧾 Reservation

Represents an individual meeting reservation.

#### Properties:

- `firstName`: Participant’s first name
- `lastName`: Participant’s last name
- `type`: Type of the meeting – either `"online"` or `"physical"`

#### Methods:

- `getFirstName()`: Returns the participant’s first name
- `getLastName()`: Returns the participant’s last name
- `getType()`: Returns the meeting type
- `setFirstName(firstName)`: Sets the participant’s first name
- `setLastName(lastName)`: Sets the participant’s last name
- `setType(type)`: Sets the meeting type (must be `"online"` or `"physical"`)

---

### 📅 Meeting

Handles all meeting reservations and availability.

#### Properties:

- `capacity`: The maximum number of **physical** meetings allowed
- `reservations`: Array of current reservations (both online and physical)

#### Methods:

- `setCapacity(capacity)`: Sets the maximum number of physical meetings
- `getCapacity()`: Returns the current maximum capacity
- `getReservations()`: Returns all current reservations
- `reserveMeeting(reservation)`: Reserves a meeting if it’s available
- `checkMeetingAvailability()`: Returns `true` if a physical spot is available, `false` otherwise

---

## Rules

- **Online meetings** have **no limit**.
- **Physical meetings** must **not exceed** the defined capacity.
- If a reservation is for a physical meeting and capacity has been reached, it must **throw an error** or **not reserve**.
- All reservations must go through `reserveMeeting`.

---

## Example Scenarios

### ✅ Case 1:
```ts
try {
  const meeting = new Meeting();

  meeting.setCapacity(20);

  const reservation = new Reservation();

  reservation.setFirstName("Anna");

  reservation.setLastName("Smith");

  reservation.setType("physical");

  meeting.reserveMeeting(reservation); // 19 ჯერ

  const userReservation = new Reservation();

  userReservation.setFirstName("John");

  userReservation.setLastName("Doe");

  userReservation.setType("physical");

  meeting.reserveMeeting(userReservation);
} catch (err) {}
```
