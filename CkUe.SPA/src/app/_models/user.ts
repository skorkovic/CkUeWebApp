import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    livingPlace: string;
    livingAddress: string;
    schollFaculty: string;
    job: string;
    birthPlace: string;
    dateOfBirth: Date;
    volunteeringStartDate: Date;
    recommended: string;
    uvn: string;
    accessRights: string;
    photoUrl: string;
    photos?: Photo[];
    roles?: string[];
}
