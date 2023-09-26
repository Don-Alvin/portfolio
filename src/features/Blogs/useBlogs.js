import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../apis/apiBlogs";

const useBlogs = () => {
	const {
		isInitialLoading: isLoading,
		data: blogs,
		error,
	} = useQuery(["blogs"], () => getBlogs());

	return { isLoading, blogs, error };
};

export default useBlogs;
