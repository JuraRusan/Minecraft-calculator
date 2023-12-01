function NameFormat(requirement) {
  return requirement.replace(/_/g, ' ').charAt(0).toUpperCase() + requirement.replace(/_/g, ' ').slice(1);
}

export default NameFormat;
