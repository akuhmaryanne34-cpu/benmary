import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data;
}
