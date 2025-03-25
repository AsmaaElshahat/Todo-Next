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