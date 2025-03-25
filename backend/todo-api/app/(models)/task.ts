import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const taskSchema = new Schema(
    {
        id: String,
        title: String,
        completed: Boolean,
        user_id: String,
    },
    {
        timestamps: true,
    }
)

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)
export default Task