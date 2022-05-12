import { useState } from "react";
import { Stream } from "@cloudflare/stream-react";
import Image from "next/image";

// https://iframe.videodelivery.net/a74f44439d4083f589849a409db251b2?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fa74f44439d4083f589849a409db251b2%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false&autoplay=true

export default function CollectionVideo() {
  const videoIdOrSignedUrl = "a74f44439d4083f589849a409db251b2";

  const [loading, setLoading] = useState(true);
  return (
    <div className="container-video">
      {loading && (
        <Image
          //   placeholder="blur"
          //   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAADwAQAAD//gAQTGF2YzU4LjEzNC4xMDD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAKAAYDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAYMqK7//xAAXEAEBAQEAAAAAAAAAAAAAAAADAgQy/9oACAEBAAEFAp0jSlx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAD/9oACAEDAQE/ATIv/8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQIBAT8Bl//EABkQAQACAwAAAAAAAAAAAAAAAAEAAhETQf/aAAgBAQAGPwKxZdfHEJ//xAAYEAEAAwEAAAAAAAAAAAAAAAABACFBMf/aAAgBAQABPyE8HG7jemT/2gAMAwEAAgADAAAAEPf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCF/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/EE7f/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITGBkf/aAAgBAQABPxAFMLQDKNGc2+TaXU//2Q=="
          alt="Video"
          src="https://videodelivery.net/a74f44439d4083f589849a409db251b2/thumbnails/thumbnail.jpg?time=&height=600"
          width={480}
          height={853.41}
        />
      )}

      <Stream
        controls
        src={videoIdOrSignedUrl}
        autoplay
        muted
        loop
        width="100%"
        height="100%"
        playsinline
        onLoadedData={() => setLoading(false)}
      />
    </div>
  );
}