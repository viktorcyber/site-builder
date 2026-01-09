import { useQuery } from '@tanstack/react-query';

import { getProjects } from '@/services/project.service';
import type { Project } from '@/types';

const useProjects = () => {
  return useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
};

export { useProjects };
