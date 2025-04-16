import Image from "next/image"

export default function ProfileBubble({ name, trade, image }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="mt-2 text-center">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-emerald-600">{trade}</p>
      </div>
    </div>
  )
}
