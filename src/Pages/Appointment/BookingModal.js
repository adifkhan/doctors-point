import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const formatedDate = format(date, "PP");
  const [user] = useAuthState(auth);

  /* // test //
    const [booked, setBooked] = useState();

    useEffect(() => {
        const query = {
            service: name,
            date: formatedDate
        }
        fetch('http://localhost:5000/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(query)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooked(data);
            })
    }, [treatment, formatedDate, name])

    // test // */

  const handleSubmit = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    const phone = event.target.phone.value;

    const booking = {
      serviceId: _id,
      service: name,
      patient: user.displayName,
      email: user.email,
      phone: phone,
      date: formatedDate,
      slot: slot,
      price: price,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment booked on ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div className="max-w-xs">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-col-1 gap-2 justify-items-center"
          >
            <input
              type="text"
              name="dateSlot"
              value={formatedDate}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
