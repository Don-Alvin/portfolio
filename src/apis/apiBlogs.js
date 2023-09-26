import { supabase } from "./supabase";

// Get all Blogs
export const getBlogs = async () => {
	const { data: Blogs, error } = await supabase.from("Blogs").select("*");

	if (error) {
		console.error(error);
		throw new Error("Blogs could not be loaded");
	}

	return Blogs;
};
