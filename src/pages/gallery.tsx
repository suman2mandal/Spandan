import Heading from '@/components/Header';
import Image from 'next/image';

const galleryImages = [
  // Add as many as you want
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 2' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee', alt: 'Dog 5' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006', alt: 'Dog 7' },
  { src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8', alt: 'Dog 8' },
  { src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', alt: 'Dog 9' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 10' },
  { src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', alt: 'Dog 9' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 10' },
  { src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', alt: 'Dog 9' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 10' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 2' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee', alt: 'Dog 5' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006', alt: 'Dog 7' },
  { src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8', alt: 'Dog 8' },
    { src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', alt: 'Dog 9' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 10' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a', alt: 'Dog 2' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Dog 1' },
  { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee', alt: 'Dog 5' },
  { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', alt: 'Dog 3' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006', alt: 'Dog 7' },
  { src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8', alt: 'Dog 8' },
  // add more as needed
];

export default function GalleryGrid() {
  return (
    <section className="w-full">
      <Heading>Our Recent Rescues</Heading>

      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryImages.map((img, index) => {
          const isBig = index % 11 === 0  ; // Every 10th starting from index 0 (i.e., 1st, 11th, 21st...)

          return (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${
                isBig ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={`${img.src}?w=800&h=800&auto=format`}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">{img.alt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
