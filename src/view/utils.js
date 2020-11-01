export const getClassList = (classArr, prefix) => {
    const classes = classArr
      .reduce((classes,classItem) => {
        return `${classes} ${prefix}--${classItem}`;
      }, prefix);

    return classes;
}

