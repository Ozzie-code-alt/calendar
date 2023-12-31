"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { EventSourceInput } from "@fullcalendar/core/index.js";
// our event object for mapping 

interface Event{
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}


export default function Home() {

  const [events, setEvents] = useState([
    {title: 'event 1' , id:'1'},
    {title: 'event 2' , id:'2'},
    {title: 'event 3' , id:'3'},
    {title: 'event 4' , id:'4'},
    {title: 'event 5' , id:'5'},
  ])

  const[allEvents, setAllEvents] = useState<Event[]>([])
  const [showmodal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  {/*Bracket here is annotations*/}
  const [idToDelete, setIdToDelete] = useState<number | null>(null) 
  const [newEvent, setNewEvent] = useState<Event>({
    title:'',
    start: '',
    allDay: false,
    id: 0
  })

  // we use usestate here to fetch data from db and show it to calendar  instead of Dragging 
  useEffect(()=>{

  })

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar </h1>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: "prev, next, today",
                center: "title",
                right: "resourceTimelineWeek, dayGridMonth, timeGridWeek",
              }}
              events={allEvents  as EventSourceInput}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              // dateClick={() => {}}
              // drop={() => {}}
              // eventClick={() => {}}
            />
          </div>
          {/*drag and Drop events*/}
          <div
            id="draggable-el"
            className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50"
          >
            <h1 className="font-bold text-lg text-center">Drag Events</h1>
            {events.map(event => (
              <div className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
              title={event.title}
              key={event.id}
              >
              {event.title}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
