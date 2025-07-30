// import { NextRequest, NextResponse } from 'next/server'
// import { connectToSpandanDB } from '@/lib/connectToSpandanDB'
// import { RescueRequest } from "@/models/RescueRequest";
// import { isValidObjectId } from 'mongoose'

// type Context = {
//   params: {
//     id: string
//   }
// }

// // GET: Fetch a rescue request by ID
// export async function GET(
//   req: NextRequest,
//   context: { params: { id: string } }
// ) {
//   try {
//     await connectToSpandanDB();

//     const { id } = context.params;

//     if (!isValidObjectId(id)) {
//       return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
//     }

//     const record = await RescueRequest.findById(id);

//     if (!record) {
//       return NextResponse.json({ message: 'Rescue request not found' }, { status: 404 });
//     }

//     return NextResponse.json(record, { status: 200 });
//   }catch (error: unknown) {
//     console.error('Error fetching rescue request:', error);
//     const message = error instanceof Error ? error.message : 'Something went wrong';
//     return NextResponse.json({ message }, { status: 500 });
//   }
// }

// // PATCH: Update a rescue request by ID
// export async function PATCH(req: NextRequest, { params }: Context): Promise<NextResponse> {
//   try {
//     const { id } = params

//     if (!isValidObjectId(id)) {
//       return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })
//     }

//     const updateData = await req.json()

//     await connectToSpandanDB()
//     const updated = await RescueRequest.findByIdAndUpdate(id, updateData, {
//       new: true,
//       runValidators: true,
//     })

//     if (!updated) {
//       return NextResponse.json({ message: 'Rescue request not found' }, { status: 404 })
//     }

//     return NextResponse.json(updated, { status: 200 })
//   }catch (error: unknown) {
//     console.error('PATCH error:', error)
//     const message = error instanceof Error ? error.message : 'Something went wrong';
//     return NextResponse.json({ message }, { status: 500 });
//   }
// }

// // DELETE: Remove a rescue request by ID
// export async function DELETE(req: NextRequest, { params }: Context): Promise<NextResponse> {
//   try {
//     const { id } = params

//     if (!isValidObjectId(id)) {
//       return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })
//     }

//     await connectToSpandanDB()
//     const deleted = await RescueRequest.findByIdAndDelete(id)

//     if (!deleted) {
//       return NextResponse.json({ message: 'Rescue request not found' }, { status: 404 })
//     }

//     return NextResponse.json({ message: 'Rescue request deleted successfully' }, { status: 200 })
//   }catch (error: unknown) {
//     console.error('DELETE error:', error)
//     const message = error instanceof Error ? error.message : 'Something went wrong';
//     return NextResponse.json({ message }, { status: 500 });
//   }
// }
export function GET() {
  return new Response('Not implemented yet', { status: 501 });
}