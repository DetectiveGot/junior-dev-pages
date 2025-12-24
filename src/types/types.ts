export type Contest = {
    id: number,
    name: string,
    phase: string,
    date: string,
    linkTo: string,
}

export type Member = {
    name: string,
    role: string[],
}

export type Problem = {
    id: string|number,
    name: string,
    author: string[],
    contest: string,
    linkTo: string,
}