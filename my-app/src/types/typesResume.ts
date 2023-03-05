export type Resume = {
    name: string,
    label: string,
    image: string,
    dateOfBirth: string,
    email: string,
    phone: string,
    url: string,
    summary: string,
    location: Location,
    profiles: Profile[],
    experience: Experience[],
    volunteer: Volunteer[],
    education: Education[],
    skills: Skill[],
    languages: Language[],
    interests: Interest[],
}

export type Location = {
    address: string,
    postalCode: string,
    city: string,
    countryCode: string,
    region: string,
}

export type Profile = {
    network: string,
    username: string,
    url: string,
    icon: string,
}

export type Experience ={
    type: string,
    name: string,
    location: string,
    position: string,
    url: string,
    startDate: string,
    endDate: string,
    summary: string,
    highlights: string[]
}

export type Volunteer = {
    organisation: string,
    position: string,
    url: string,
    startDate: string,
    endDate: string,
    summary: string,
    location: string,
    highlights: string[],
}

export type Education = {
    institution: string,
    url: string,
    area: string,
    studyType: string,
    startDate: string,
    endDate: string,
    score: string,
    courses?: string[],
}

export type Certificate ={
    name: string,
    date: string,
    issuer: string,
    url: string,
}

export type Skill = {
    name: string,
    keywords: string[]

}

export type Language = {
    language: string,
    fluency: string,
    icon?: string,
}

export type Interest = {
 name: string,
 icon: string,
}