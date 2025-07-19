import Heading from '@/components/wrappers/Header';
import Image from 'next/image';
import CWrapper from '@/components/wrappers/component-wrapper';
import ImageComparisonSlider from '@/components/ImageComparisonSlider';
import VideoComparisonSlider from '@/components/VideoComparisonSlider';
// ...existing code...
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    src2: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    alt: 'Dog 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    src2: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    alt: 'Dog 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    src2: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    alt: 'Dog 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    src2: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Dog 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    src2: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    alt: 'Dog 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    src2: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    alt: 'Dog 6',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    src2: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    alt: 'Dog 7',
  },
  {
    src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    src2: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    alt: 'Dog 8',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    src2: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    alt: 'Dog 9',
  },
  {
    src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    src2: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    alt: 'Dog 10',
  },
  {
    src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    src2: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    alt: 'Dog 11',
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    src2: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    alt: 'Dog 12',
  },
  {
    src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    src2: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Dog 13',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    src2: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    alt: 'Dog 14',
  },
  {
    src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    src2: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    alt: 'Dog 15',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    src2: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    alt: 'Dog 16',
  },
  {
    src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    src2: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    alt: 'Dog 17',
  },
  {
    src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    src2: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    alt: 'Dog 18',
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    src2: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Dog 19',
  },
  {
    src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    src2: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    alt: 'Dog 20',
  },
];


export default function GalleryGrid() {
  return (
    <CWrapper>
      <VideoComparisonSlider
      previous="https://www.youtube.com/watch?v=eaWnC5WfYT0"
      current="https://www.youtube.com/watch?v=Qfk7_-Xs98k"
    />
    {/* <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Rescue Story Video</h1>

      <YouTubeEmbed url="https://www.youtube.com/watch?v=Qfk7_-Xs98k" />
    </div> */}



    <section className="w-full">
      <Heading
        title="Our Recent Rescues"
        subtitle="Take a look at the lives we've touched recently — from urgent rescues to heartwarming recoveries. Your support makes these stories possible."
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryImages.map((img, index) => {
          const isBig = index % 11 === 0; // Make 1st, 12th, 23rd... items large

          return (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${
                isBig ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              {isBig ? (
                <ImageComparisonSlider
                  previous={`${img.src}?w=800&h=800&auto=format`}
                  current={`${img.src2}?w=800&h=800&auto=format`}
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL="/images/SpandanLogo.png"
                />
              ) : (
                <>
                <Image
                    src={`${img.src}?w=800&h=800&auto=format`}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-center text-sm px-2">{img.alt}</p>
                  </div>
                </>
              )}

              
            </div>
          );

        })}
      </div>
    </section>
    </CWrapper>
  );
}