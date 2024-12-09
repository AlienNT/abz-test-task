export interface UserInterface extends PositionInterface{
  id: string,
  name: string,
  email: string,
  phone: string,
  registration_timestamp: number,
  photo: string,
}

export interface PositionInterface {
  position: string,
  position_id: string | number,
}
