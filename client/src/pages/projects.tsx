import { LayersPlus, Loader2Icon } from 'lucide-react';
import { useNavigate } from 'react-router';

import { useProjects } from '@/hooks/use-projects';

const Projects = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading } = useProjects();

  console.log(projects);

  return (
    <>
      <section className="px-4 md:px-16 lg:px-24 xl:px-32">
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <Loader2Icon className="size-7 animate-spin text-indigo-200" />
          </div>
        ) : projects && projects.length > 0 ? (
          <div className="py-10 min-h-[80vh]">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-2xl font-medium text-white">Projects</h1>
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white px-3 sm:px-6 py-1 sm:py-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                <LayersPlus size={18} /> New
              </button>
            </div>

            <div className="flex flex-wrap gap-3.5">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden shadow-md group-hover:shadow-indigo-700/30 hover:border-indigo-800/80 transition-all duration-300"
                >
                  <div className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800">
                    {item.name ? (
                      <iframe
                        srcDoc=""
                        className="absolute top-0 left-0 w-300 h-200 origin-top-left pointer-events-none"
                        sandbox="allow-scripts allow-same-origin"
                        style={{
                          transform: 'scale(0.25)',
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <p>No Preview</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <h1 className="text-3xl font-semibold text-gray-300">
              You have no projects yet!
            </h1>
            <button
              onClick={() => navigate('/')}
              className="text-white px-5 py-2 mt-5 rounded-md bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all cursor-pointer"
            >
              Create New
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
