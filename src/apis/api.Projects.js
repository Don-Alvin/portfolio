import { supabase } from "./supabase";

export const getProjects = async () => {
	const { data: projects, error } = await supabase.from("Projects").select("*");

	if (error) {
		console.error(error);
		throw new Error("Projects could not be loaded");
	}

	return projects;
};
