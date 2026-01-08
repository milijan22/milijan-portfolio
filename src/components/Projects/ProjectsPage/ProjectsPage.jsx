import todoPrev from "../../../assets/todo-prev.png";
import currencyPrev from "../../../assets/currency-prev.png";


console.log(todoPrev);
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projectsList = [
    {
      id: 0,
      name: "To-Do App",
      description: "Manage tasks in a notepad style to-do list",
      preview: todoPrev,
      link: "/tasks"
    },
    {
      id: 1,
      name: "Currency Converter",
      description: "Currency converter with up-to-date exchange rates",
      preview: currencyPrev,
      link: "/currency"
    },
  ];

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="p-8 mt-8 w-180 grid grid-cols-3 gap-6">
        {projectsList.map((project) => (
          <Link key={project.id} to={project.link}>
            <div className="relative bg-cover bg-center border-cyan-900 border-[10px] rounded-2xl shadow-lg w-[200px] h-[200px] cursor-pointer overflow-hidden">
              <img
                src={project.preview}
                alt={project.name}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {project.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
