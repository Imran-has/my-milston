"use client"
import { useParams } from 'next/navigation';

const mobileData:Record<string,{name:string;price:string;description:string}> = {
  1: { name: 'iPhone 14', price: '$799', description: 'Apple flagship phone.' },
  2: { name: 'Samsung Galaxy S23', price: '$999', description: 'High-end Samsung phone.' },
  3: { name: 'OnePlus 11', price: '$699', description: 'Affordable flagship killer.' },
};

export default function MobileDetails() {
  const params = useParams();
  const mobileId=params?.id as string
 
  const mobile = mobileId? mobileData[mobileId]:undefined;

  if (!mobile) {
    return <p>Mobile not found!</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{mobile.name}</h1>
      <p className="text-lg">Price: {mobile.price}</p>
      <p className="text-gray-600">{mobile.description}</p>
    </div>
  );
}


