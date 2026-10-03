import { NextResponse } from "next/server";

export async function POST(request){
    try{

        const body = request.body;
        if(!body.secret || !body.password){
            return NextResponse.json(
                {
                    message: "Every Credentials are required"
                },{
                    status: 400
                }
            );
        }
        const response = await fetch(`${process.env.API_URL}/api/v1/auth/login`,{
            method: "POST",
            body: JSON.stringify(body)
        });
        const data = response.json();
        return NextResponse.json(
        {
            data,
        },
        {
            status: 200
        }
    )
}
catch(error){
    return NextResponse.json(
        {
            message: "Internal Server Error"
        },
        {
            status: 500
        }
    );
}
}