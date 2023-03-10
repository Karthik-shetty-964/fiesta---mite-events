import User from "../models/User.js";
import Event from "../models/Event.js";

// read
// getting user details for the profile page from the database.
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


// getting the regiseterd events data of the user from the backend.
export const getRegisteredEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const registeredEvents = await Promise.all(
      user.registeredEvents.map((eventId) => Event.findById(eventId))
    );
    const formattedRegisteredEvents = registeredEvents.map(
      ({
        _id,
        eventName,
        branch,
        description,
        picturePath,
        eventType,
        eventStartDate,
        eventEndDate,
        venue,
        feedback,
        registeredCandidates,
      }) => {
        return {
          _id,
          eventName,
          branch,
          description,
          picturePath,
          eventType,
          eventStartDate,
          eventEndDate,
          venue,
          feedback,
          registeredCandidates,
        };
      }
    );
    res.status(200).json(formattedRegisteredEvents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


// update
// registering and unregistering from the event.
export const registerUnregisterForEvent = async (req, res)=>{
    try{
        const {id, eventId} = req.params;
        const user = await User.findById(id);
        const event = await Event.findById(eventId);

        if ( user.registeredEvents.includes(eventId)) {
            user.registeredEvents = user.registeredEvents.filter((id) => id !== eventId);
            event.registeredCandidates = event.registeredCandidates.filter((id) => id !== id);      
            
            await user.save();
            await event.save();
            res.status(200).json({message : "Unregistered successfully."})
        } else {
            user.registeredEvents.push(eventId);
            event.registeredCandidates.push(id); 
            
            await user.save();
            await event.save();
            res.status(200).json({message : "Registered successfully."})
        }

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}