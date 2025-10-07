export const capitalizeWords = (text) => 
  text.replace(/\b\w/g, char => char.toUpperCase());

export const toKebabCase = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

    export const formatTech = (tech) => capitalizeWords(tech.toLowerCase());

export const generateProjectId = (name) => `project-${toKebabCase(name)}`;