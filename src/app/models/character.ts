import { LocationCharacter } from "./locationCharacter"
import { Origin } from "./origin"

export interface Character{
id: number
name: string
status: string
species: string
type: string
gender: string
origin: Origin
location: LocationCharacter
image: string
episode: string[]
url: string
created: Date
}