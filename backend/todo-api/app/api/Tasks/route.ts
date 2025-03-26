import Task from "../../(models)/task";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json();
        const TaskData = body.task;
        await Task.create(TaskData);
        return NextResponse.json({message: 'Task Created'}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {status: 500});
    }
}

export async function GET() {
    try {
      const tasks = await Task.find();
  
      return NextResponse.json({ tasks }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
    }
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error deleting task", err }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
    }
    // Find the task and toggle the is_completed value
    const task = await Task.findById(id);
    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    task.completed = !task.completed; // Toggle completion
    await task.save();
    return NextResponse.json({ message: "Task updated successfully", task }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating task", error }, { status: 500 });
  }
}