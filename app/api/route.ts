import Task from "../(models)/task";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json();
        const TaskData = body.formData;
        await Task.create(TaskData);
        return NextResponse.json({message: 'Task Created'}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {status: 500});
    }
}