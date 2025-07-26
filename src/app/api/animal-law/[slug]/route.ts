import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import AnimalLaw from '@/models/AnimalLaw';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // await connectToDB('Animal-Law');
  await connectToSpandanDB();
  // console.log('Fetching law with slug:', params);
  // Await the params promise and extract 'slug'
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const law = await AnimalLaw.findOne({ slug: decodedSlug });
  if (!law) {
    return new Response('No laws found with that slug', { status: 404 });
  }
  return new Response(JSON.stringify(law), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

