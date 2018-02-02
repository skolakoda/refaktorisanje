import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(user: any, type?: string): string {
    if (user &&
      type === 'post' &&
      user.action_by_first_name &&
      user.action_by_last_name) {
      return user.action_by_first_name.slice(0, 1) + user.action_by_last_name.slice(0, 1);
    } else
      if (user && user.firstName && user.lastName) {
        return user.firstName.slice(0, 1) + user.lastName.slice(0, 1);
      } else
        if (user && user.firstName) {
          return user.firstName.slice(0, 1);
        } else
          if (user && user.lastName) {
            return user.lastName.slice(0, 1);
          } else
            if (user && user.displayName) {
              const displayNameArr = user.displayName.split(' ');
              let name = displayNameArr[0].slice(0, 1);
              if (displayNameArr[1]) {
                name = name + ' ' + displayNameArr[1].slice(0, 1);
              } else {
                name = name + ' ' + name;
              }
              return name;
            } else
              if (user && user.name) {
                const displayNameArr = user.name.split(' ');
                let name = displayNameArr[0].slice(0, 1);
                if (displayNameArr[1]) {
                  name = name + ' ' + displayNameArr[1].slice(0, 1);
                } else {
                  name = name + ' ' + name;
                }
                return name;
              } else
                if (user && user.viewer_name) {
                  const viewer_nameArr = user.viewer_name.split(' ');
                  return viewer_nameArr[0].slice(0, 1) + viewer_nameArr[1].slice(0, 1);
                } else
                  if (user && user.user_connection_status === 'RECEIVED_REQUEST') {
                    const displayNameArr = user.requester_name.split(' ');
                    let name = displayNameArr[0].slice(0, 1);
                    if (displayNameArr[1]) {
                      name = name + '' + displayNameArr[1].slice(0, 1);
                    } else {
                      name = name + '' + name;
                    }
                    return name;
                  } else {
                    return 'X';
                  }
  }
}
