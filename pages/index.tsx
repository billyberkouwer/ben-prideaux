import { client } from '../sanity/lib/client';

export default function HomePage() {
  return (
    <div className="bg-gray-500 flex justify-center w-full h-full">
      <h2>Test</h2>
    </div>
  )
}

export async function getStaticProps() {
  const homepageData = await client.fetch('*[_type == "projectPage"]');

  return {
    props: {
    }
  }
}