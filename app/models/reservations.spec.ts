import { getReservations, createReservation } from "./reservation.server";

describe("reservation model", () => {
  xit("should create a new reservation", async () => {
    const input = {
      profile_id: "5644eaef-d550-4579-9cde-8f459155dee5",
      product_id: 14,
    };

    const reservation = await createReservation(input);

    expect(reservation?.id).toBeDefined();
    expect(reservation?.created_at).toBeDefined();
    expect(reservation?.updated_at).toBeDefined();
    expect(reservation?.product_id).toEqual(input.product_id);
    expect(reservation?.profile_id).toEqual(input.profile_id);
  });

  xit("should return all reservations", async () => {
    const reservations = await getReservations();

    expect(reservations).toBeDefined();
  });
});
