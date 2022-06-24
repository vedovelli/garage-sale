import { supabase } from "./user.server";

export type Reservation = {
  id: string;
  profile_id: string;
  product_id: number;
  created_at: Date;
  updated_at: Date;
};

export async function getReservations() {
  const { data } = await supabase.from("reservations").select("*");

  return data;
}

export async function createReservation({
  profile_id,
  product_id,
}: Pick<
  Reservation,
  "profile_id" | "product_id"
>): Promise<Reservation | null> {
  const { data, error } = await supabase
    .from("reservations")
    .insert([{ profile_id, product_id }])
    .single();

  if (!error) {
    return data;
  }

  return null;
}

// export async function deleteNote({
//   id,
//   userId,
// }: Pick<Note, "id"> & { userId: User["id"] }) {
//   const { error } = await supabase
//     .from("notes")
//     .delete({ returning: "minimal" })
//     .match({ id, profile_id: userId });

//   if (!error) {
//     return {};
//   }

//   return null;
// }

// export async function getNote({
//   id,
//   userId,
// }: Pick<Note, "id"> & { userId: User["id"] }) {
//   const { data, error } = await supabase
//     .from("notes")
//     .select("*")
//     .eq("profile_id", userId)
//     .eq("id", id)
//     .single();

//   if (!error) {
//     return {
//       userId: data.profile_id,
//       id: data.id,
//       title: data.title,
//       body: data.body,
//     };
//   }

//   return null;
// }
