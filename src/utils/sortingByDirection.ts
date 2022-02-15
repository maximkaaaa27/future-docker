

export const sortingByDirection = (array: any[] | undefined, field: string, direction: string) => {

  if(!array) return;
    switch(direction) {
      case '⌃' : return array.slice().sort((a, b) => a[field] - b[field]);
      case '⌄' : return array.slice().sort((a, b) => b[field] - a[field]);
      default : return
    }
}