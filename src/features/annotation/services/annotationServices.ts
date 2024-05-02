import { Annotation } from "../interfaces/annotation";

export const addAnnotation = (annotation: Annotation) => {
  const annotations = getAnnotations();
  const newAnnotations = [...annotations, annotation];
  localStorage.setItem("annotations", JSON.stringify(newAnnotations));
};

export const removeAnnotation = (annotationId: string) => {
  const annotations = getAnnotations();
  const newAnnotations = annotations.filter(
    (annotation: Annotation) => annotation.id !== annotationId
  );
  localStorage.setItem("annotations", JSON.stringify(newAnnotations));
};

export const getAnnotations = () => {
  const annotations = localStorage.getItem("annotations") || "[]";
  return JSON.parse(annotations);
};

export const getAnnotationsByUserId = (userId: string) => {
  const annotations = getAnnotations();
  return annotations.filter(
    (annotation: Annotation) => annotation.userId === userId
  );
};

export const getAnnotationsByVerseId = (userId: string, verseId: string) => {
  const annotations = getAnnotations();
  return annotations.filter(
    (annotation: Annotation) =>
      annotation.verseId === verseId && annotation.userId === userId
  );
};
