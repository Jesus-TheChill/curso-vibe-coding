"use client";

import dynamic from "next/dynamic";

const PropertyMap = dynamic(() => import("./PropertyMap"), { 
  ssr: false,
  loading: () => <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-nordic-dark/50 text-sm font-medium">Loading map...</div>
});

type Props = {
  lat: number;
  lng: number;
};

export default function DynamicMap({ lat, lng }: Props) {
  return <PropertyMap lat={lat} lng={lng} />;
}
