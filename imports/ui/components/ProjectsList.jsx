import React from 'react'
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ReportsCollection } from '../../api/ReportsCollection';


export const ProjectsList = ({ clientID }) => {
  const projects = useTracker(() => {
    Meteor.subscribe('reports')
    return ReportsCollection.find({clientID: clientID }).fetch()
  });
  console.log('Projects',projects)

  const handleDelete = (projectID) => {
    Meteor.call('removeProject', { _id: projectID });
  };

  return (
    <div>
      {projects.length === 0 ? (
        <div>
          No projects added, add projects.
        </div>
      ):(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Project name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Date created
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Automations
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">View</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Delete</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {projects.map(project => (
                    <tr key={project._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Facebook Report
                      </th>
                      <td className="px-6 py-4">
                          {project.createdAt.toDateString()}
                      </td>
                      <td className="px-6 py-4">
                          Report
                      </td>
                      <td className="px-6 py-4">
                          0 Active
                      </td>
                      <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                      <td className="px-6 py-4 text-right">
                          <Link to={`/${clientID}/project/${project._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                      </td>
                      <td className="px-6 py-4 text-right">
                          <Link to={'#'} onClick={() => handleDelete(project._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
          </table>
        </div>
      )}
    </div>
    
  )
}
