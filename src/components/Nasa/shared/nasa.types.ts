export interface Photo {
  id: number;
  sol?: number;
  img_src: string;
  camera: Camera;
  earth_date?: string;
  rover?: Rover;
}

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name?: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface SearchRequest {
  key: 'earth_date' | 'sol';
  value: string;
}
