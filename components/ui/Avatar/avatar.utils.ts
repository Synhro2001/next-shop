
export function getAvatarColor(name: string) {
    let hash = 0;
    for(let i = 0; i<name.length; i++){
        hash = name.charCodeAt(i)+((hash << 5) - hash);
    }
    const h = hash%360;
    return 'hsl('+h+', '+30+'%, '+80+'%)'
}