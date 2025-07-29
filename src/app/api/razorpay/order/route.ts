// import { NextResponse } from 'next/server';
// import { razorpay } from '@/lib/razorpay';
// import crypto from 'crypto';

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { amount, currency = 'INR', receipt = 'receipt_order_74394' } = body;

//   const options = {
//     amount: amount * 100, // amount in smallest currency unit
//     currency,
//     receipt,
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     return NextResponse.json({ orderId: order.id });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
//   }
// }
