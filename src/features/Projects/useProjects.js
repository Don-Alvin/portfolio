import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../apis/api.Projects";

const useProjects = () => {
	const {
		isInitialLoading: isLoading,
		data: projects,
		isError,
		error,
	} = useQuery(["projects"], () => getProjects());

	return { isLoading, projects, error, isError };
};

export default useProjects;
