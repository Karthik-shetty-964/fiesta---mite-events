import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
    {
        eventName : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        branch : {
            type : String,
            required : true
        },
        picturePath : {
            type : String,
        },
        eventType : {
            type : String,
            required : true
        },
        eventStartDate : {
            type : Date,
            required : true
        },
        eventEndDate : {
            type : Date,
            required : true
        },
        venue : {
            type : String,
            required : true
        },
        feedback : {
            type : Array,
            default : []
        },
        registeredCandidates : {
            type : Array,
            default : []
        }
    },
    {timestamps : true}
);

const Event = mongoose.model("Event", eventSchema);


export default Event;
