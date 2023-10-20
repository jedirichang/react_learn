import { Outlet } from "react-router-dom"
import EventsNavigation from "./EventsNavigation"

const EventContainer = () => {
    return <>
        <EventsNavigation />
        <Outlet />
    </>
}

export default EventContainer;