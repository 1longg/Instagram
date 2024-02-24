import { Follow } from './follow.entity';

export function fromDtoToEntity(userToId: string, userFromId: string): Follow {
    const follow = new Follow();
    follow.userToId = userToId
    follow.userFromId = userFromId
    return follow
}
