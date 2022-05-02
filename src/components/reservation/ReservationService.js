import HttpHelper from "../../utilities/HttpHelper.js";
import Constants from "../../utilities/Constants.js";

export async function fetchReservations(setReservations, setApiError) {
  await HttpHelper(`${Constants.RESERVATIONS_ENDPOINT}`, "GET")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then((data) => {
      setReservations(data);
    })
    .catch(() => {
      setApiError(true);
    });
}

export async function fetchReservationId(setReservations, id, setApiError) {
  await HttpHelper(`${Constants.RESERVATIONS_ENDPOINT}/${id}`, "GET")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then((data) => {
      setReservations(data);
    })
    .catch(() => {
      setApiError(true);
    });
}
export async function fetchRoomTypes(setRoomTypes, setApiError) {
  await HttpHelper(`${Constants.ROOMTYPES_ENDPOINT}`, "GET")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then((data) => {
      setRoomTypes(data);
    })
    .catch(() => {
      setApiError(true);
    });
}

export async function deleteReservation(setApiError, reservation) {
  await HttpHelper(
    `${Constants.RESERVATIONS_ENDPOINT}/${reservation}`,
    "DELETE"
  )
    .then((response) => {
      if (!response.ok) {
      }
    })
    .catch(() => {
      setApiError(true);
    });
}
export async function postReservation(reservation, navigate, setApiError) {
  await HttpHelper(`${Constants.RESERVATIONS_ENDPOINT}`, "POST", reservation)
    .then((response) => {
      if (response.ok) {
        navigate("/reservations");
      }
    })
    .catch(() => {
      setApiError(true);
    });
}
export async function updateReservation(
  reservation,
  id,
  navigate,
  setApiError
) {
  await HttpHelper(
    `${Constants.RESERVATIONS_ENDPOINT}/${id}`,
    "PUT",
    reservation
  )
    .then((response) => {
      if (response.ok) {
        navigate("/reservations");
      }
    })
    .catch(() => {
      setApiError(true);
    });
}
