/*mport { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
      image: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/hillaryoduor/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.hillaryoduor.com',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/hillaryoduor/task-manager',
      liveUrl: 'https://tasks.hillaryoduor.com',
      category: 'web'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that provides current and forecasted weather data for locations worldwide.',
      image: 'bg-gradient-to-r from-purple-500 to-pink-500',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/hillaryoduor/weather-dashboard',
      liveUrl: 'https://weather.hillaryoduor.com',
      category: 'web'
    },
    {
      id: 4,
      title: 'Fitness Tracker Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.',
      image: 'bg-gradient-to-r from-orange-500 to-red-500',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubUrl: 'https://github.com/hillaryoduor/fitness-tracker',
      category: 'mobile'
    },
    {
      id: 5,
      title: 'Restaurant Booking System',
      description: 'A reservation system for restaurants with table management, customer profiles, and SMS notifications.',
      image: 'bg-gradient-to-r from-green-500 to-emerald-500',
      technologies: ['Next.js', 'PostgreSQL', 'Twilio API'],
      githubUrl: 'https://github.com/hillaryoduor/restaurant-booking',
      liveUrl: 'https://bookings.hillaryoduor.com',
      category: 'web'
    },
    {
      id: 6,
      title: 'Social Media Analytics Dashboard',
      description: 'Analytics platform for social media metrics tracking, reporting, and insights generation.',
      image: 'bg-gradient-to-r from-rose-500 to-pink-500',
      technologies: ['React', 'D3.js', 'Node.js', 'MySQL'],
      githubUrl: 'https://github.com/hillaryoduor/social-analytics',
      category: 'web'
    }
  ]

  const categories = ['all', 'web', 'mobile']
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-16 safe-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
        </p>

        {/* Filter buttons /}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid /}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded dark:bg-primary-900 dark:text-primary-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects*/