export function MouseOver(id: string) {
  document.body.style.cursor = "pointer";
  const about = document.getElementById(id);
  if (about) {
    about.style.transform = "scale(1.02)";
  }
}

export function MouseOut(id: string) {
  document.body.style.cursor = "default";
  const about = document.getElementById(id);
  if (about) {
    about.style.transform = "scale(1)";
  }
}
