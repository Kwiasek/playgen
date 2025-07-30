interface ImageObject {
  url: string,
  height: number | null,
  width: number | null
}

export interface TrackObject {
  album: {
    id: string,
    images: ImageObject[],
    name: string,
  },
  artists: {
    id: string,
    name: string
  }[],
  duration_ms: number,
  id: string,
  name: string,
}

export interface ResponseData {
  tracks: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: TrackObject[]
  }
}