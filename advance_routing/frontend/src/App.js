import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import EventDetailPage, { loader as EventDetailLoader, action as deleteEvent } from './components/EventDetailPage';
import NewEventPage from './components/NewEventPage';
import EditEventPage from './components/EditEventPage';
import EventContainer from './components/EventContainer';
import EventsPage, { loader as EventsLoader } from './components/Event';
import ErrorPage from './components/Error';
import { action as manipulateEventAction } from './components/EventForm'



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <HomePage />
    },
    {
      path: 'events',
      element: <EventContainer />,
      children: [{
        index: true,
        element: <EventsPage />,
        loader: EventsLoader
      },
      {
        path: ':id',
        loader: EventDetailLoader,
        id: 'event-detail',
        children: [
          {
            index: true,
            action: deleteEvent,
            element: <EventDetailPage />,
          },
          {
            path: 'edit',
            element: <EditEventPage />
          }
        ]
      },
      {
        path: 'new',
        element: <NewEventPage />,
        action: newEventAction
      }]
    },
    ]
  }
])
function App() {



  return <RouterProvider router={routes} />
}

export default App;
