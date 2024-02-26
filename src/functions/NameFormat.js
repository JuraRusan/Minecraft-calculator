export default function NameFormat(requirement) {
  if (typeof requirement !== 'undefined' && requirement !== null) {
    return requirement.replace(/_/g, ' ').charAt(0).toUpperCase() + requirement.replace(/_/g, ' ').slice(1);
  }
}